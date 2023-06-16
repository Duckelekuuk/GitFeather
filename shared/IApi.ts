import { OpenFolderResult } from '@shared/models/OpenFolderResult';
import { FileChangeResults } from '@shared/models/StatusChangesResult';
import { RecentProjectsResult } from '@shared/models/RecentProjectsResult';

export interface IApi {
    // openFolder: () => IpcRenderer;
    openFolder: () => Promise<OpenFolderResult>;
    getFileChanges: () => Promise<FileChangeResults>;
    getRecentProjects: () => Promise<RecentProjectsResult>;
}
