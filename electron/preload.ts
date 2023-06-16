import { contextBridge, ipcRenderer } from 'electron';

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
    openFolder: () => ipcRenderer.invoke('open-folder'),
    getFileChanges: () => ipcRenderer.invoke('file-changes'),
    getRecentProjects: () => ipcRenderer.invoke('recent-projects')
});
// Comment
