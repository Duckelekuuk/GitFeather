import { Component } from 'react';
import './App.scss';
import { FileChangeResults } from '@shared/models/StatusChangesResult';

export class App extends Component {
    state: AppState = {
        fileChangeResults: null
    };

    render() {
        return (
            <div className={'App '}>
                <button onClick={() => this.openFolder()}>OpenFolder</button>
                {this.state.fileChangeResults !== undefined &&
                    this.state.fileChangeResults?.modified.map((file) => <ul>{file}</ul>)}
            </div>
        );
    }

    async openFolder() {
        const openFolderResult = await window.api.openFolder();
        const statusChanges = await window.api.getFileChanges();
        this.setState({ fileChangeResults: statusChanges });
    }
}

export interface AppState {
    fileChangeResults: FileChangeResults | null;
}

export default App;
