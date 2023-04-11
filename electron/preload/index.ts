import { ipcRenderer, contextBridge } from "electron";

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
});

// 'ipcRenderer' will be available in index.js with the method 'window.electron'
contextBridge.exposeInMainWorld("electron", {
    send: (command: string, payload: any) => ipcRenderer.send(command, payload),
    on: (command: string, func: (...args: any) => any) =>
        ipcRenderer.on(command, (event, args) => {
            func(event, args);
        }),
    invoke: (command: string, payload: any) =>
        ipcRenderer.invoke(command, payload),
});
