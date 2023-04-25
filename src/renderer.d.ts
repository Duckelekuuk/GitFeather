import { OpenFolderResult } from '@shared/models/OpenFolderResult';

export interface IApi {
    // openFolder: () => IpcRenderer;
    openFolder: () => OpenFolderResult;
}

declare global {
    interface Window {
        api: IApi;
    }
}
