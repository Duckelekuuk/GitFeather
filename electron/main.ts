import { app, BrowserWindow, dialog, ipcMain, Menu, shell } from 'electron';
import { release } from 'node:os';
import { join } from 'node:path';
import { menu } from './settings/menu';
import { initSplashScreen } from '@trodi/electron-splashscreen';
import GitFeatherStore from './services/GitFeatherStore';
import { OpenFolderResult } from '../shared/models/OpenFolderResult';
import GitService from './services/GitService';
import { FileChangeResults } from '../shared/models/StatusChangesResult';

// The built directory structure
//
// ├─┬ dist-electron
// │ ├─┬ main
// │ │ └── index.js    > Electron-Main
// │ └─┬ preload
// │   └── index.js    > Preload-Scripts
// ├─┬ dist
// │ └── index.html    > Electron-Renderer
//
process.env.DIST_ELECTRON = __dirname;
process.env.DIST = join(process.env.DIST_ELECTRON, 'dist');
process.env.PUBLIC = process.env.VITE_DEV_SERVER_URL
    ? join(process.env.DIST_ELECTRON, '../public')
    : process.env.DIST;

// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration();

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName());

if (!app.requestSingleInstanceLock()) {
    app.quit();
    process.exit(0);
}

// Remove electron security warnings
// This warning only shows in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/security
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
const store = new GitFeatherStore();
const gitService = new GitService(store.getCurrentFolder());

let win: BrowserWindow | null = null;
// Here, you can also use other preload
const preload = join(__dirname, 'preload.js');
const url = process.env.VITE_DEV_SERVER_URL;
const indexHtml = join(process.env.DIST, 'index.html');

async function createMainWindow() {
    if (app.commandLine.hasSwitch('disable-gpu')) {
        app.disableHardwareAcceleration();
    }

    const windowOptions = {
        title: 'GitFeather',
        show: false,
        icon: join(process.env.PUBLIC, 'favicon.ico'),
        webPreferences: {
            preload,
            // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
            // Consider using contextBridge.exposeInMainWorld
            // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
            nodeIntegration: false,
            contextIsolation: true
        }
    };

    win = initSplashScreen({
        windowOpts: windowOptions,
        templateUrl: join(process.env.PUBLIC, 'splash.html'),
        minVisible: 5000,
        splashScreenOpts: {
            width: 300,
            height: 500,
            icon: join(process.env.PUBLIC, 'favicon.ico')
        }
    });

    if (process.env.VITE_DEV_SERVER_URL) {
        // electron-vite-vue#298
        win.loadURL(url);
        // Open devTool if the app is not packaged
        win.webContents.openDevTools({ mode: 'undocked' });
    } else {
        win.loadFile(indexHtml);
    }

    // Test actively push message to the Electron-Renderer
    win.webContents.on('did-finish-load', () => {
        win?.webContents.send('main-process-message', new Date().toLocaleString());
    });

    // Make all links open with the browser, not with the application
    win.webContents.setWindowOpenHandler(({ url }) => {
        if (url.startsWith('https:')) shell.openExternal(url);
        return { action: 'deny' };
    });
}

app.whenReady()
    .then(async () => {
        await createMainWindow();
    })
    .then(() => {
        Menu.setApplicationMenu(menu);
    });

app.on('window-all-closed', () => {
    win = null;
    if (process.platform !== 'darwin') app.quit();
});

app.on('second-instance', () => {
    if (win) {
        // Focus on the main window if the user tried to open another
        if (win.isMinimized()) win.restore();
        win.focus();
    }
});

app.on('activate', () => {
    const allWindows = BrowserWindow.getAllWindows();
    if (allWindows.length) {
        allWindows[0].focus();
    } else {
        createMainWindow();
    }
});

ipcMain.handle('open-folder', async (_, arg): Promise<OpenFolderResult> => {
    const result = await dialog.showOpenDialog(win, {
        properties: ['openDirectory']
    });

    if (result.canceled) {
        return {
            success: false
        };
    }

    const selectedFolder = result.filePaths[0];

    console.log('directories selected', selectedFolder);

    store.setCurrentFolder(selectedFolder);
    gitService.setCwd(selectedFolder);

    return {
        success: true
    };
});

ipcMain.handle('file-changes', async (_, args): Promise<FileChangeResults> => {
    const status = await gitService.getStatus();
    return {
        staged: status.staged,
        created: status.created,
        deleted: status.deleted,
        ignored: status.ignored,
        modified: status.modified,
        not_added: status.not_added
    };
});
