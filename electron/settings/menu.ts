import { Menu, shell } from 'electron';
import path from 'node:path';

export const menu = Menu.buildFromTemplate([
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        click: () => {}
      },
      {
        label: 'Clone'
      },
      {
        label: 'Init'
      },
      {
        label: 'Open in filemanager',
        click: () => {
          shell.showItemInFolder(path.join(__dirname, '..', '..'));
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Preferences'
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        role: 'quit'
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        role: 'reload'
      }
    ]
  }
]);
