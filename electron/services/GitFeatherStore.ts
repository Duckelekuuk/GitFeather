import Store from 'electron-store';

export default class GitFeatherStore {
    private store: Store;

    constructor() {
        this.store = new Store();
    }

    public setCurrentFolder(folder: string) {
        this.store.set('current-folder', folder);
    }

    public getCurrentFolder(): string {
        return <string>this.store.get('current-folder');
    }
}
