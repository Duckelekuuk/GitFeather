import { contextBridge, ipcRenderer } from 'electron';
import { IpcMethods } from './constants/ipc-methods';

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    };

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type]);
    }
});

// 'ipcRenderer' will be available in index.js with the method 'window.electron'
contextBridge.exposeInMainWorld('api', {
    openFolder: () => ipcRenderer.invoke(IpcMethods.SELECT_FOLDER),
    getFileChanges: () => ipcRenderer.invoke(IpcMethods.GIT_FILE_CHANGES),
    openProject: (path: string) => ipcRenderer.invoke(IpcMethods.OPEN_PROJECT, path)
    // getRecentProjects: () => ipcRenderer.invoke('recent-projects')
});
// Comment
