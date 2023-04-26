import { OpenFolderResult } from '@shared/models/OpenFolderResult';
import { FileChangeResults } from '@shared/models/StatusChangesResult';

export interface IApi {
    // openFolder: () => IpcRenderer;
    openFolder: () => OpenFolderResult;
    getFileChanges: () => FileChangeResults;
}
