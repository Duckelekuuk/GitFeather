export interface FileChangeResults {
    not_added: string[];
    created: string[];
    deleted: string[];

    ignored?: string[];
    modified: string[];
    staged: string[];
}
