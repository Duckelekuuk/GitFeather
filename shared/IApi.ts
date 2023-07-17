import { SelectFolderResult } from '@shared/models/SelectFolderResult';
import { FileChangeResults } from '@shared/models/StatusChangesResult';

export interface IApi {
    openFolderDialog: () => Promise<SelectFolderResult>;
    openProject: (path: string) => Promise<void>;
    getFileChanges: () => Promise<FileChangeResults>;
}
