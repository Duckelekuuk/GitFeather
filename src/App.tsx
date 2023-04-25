import { Component } from 'react';
import './App.scss';

export class App extends Component {
    render() {
        return (
            <div className={'App '}>
                <button onClick={() => this.openFolder()}>OpenFolder</button>
            </div>
        );
    }

    async openFolder() {
        const openFolderResult = await window.api.openFolder();
        console.log(openFolderResult);
    }
}

export default App;
