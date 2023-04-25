import { simpleGit, SimpleGit, StatusResult } from 'simple-git';

export default class GitService {
    private simpleGit: SimpleGit;

    constructor(path: string | undefined) {
        if (path === undefined) {
            path = process.cwd();
        }

        this.simpleGit = simpleGit({
            baseDir: path
        });
    }

    public setCwd(path: string) {
        this.simpleGit.cwd(path);
    }

    public getStatus(): Promise<StatusResult> {
        return this.simpleGit.status();
    }
}
