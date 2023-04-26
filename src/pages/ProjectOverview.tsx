import { Component } from 'react';
import ProfileSelectionComponent from '@/components/profile-selection/ProfileSelection';

export default class ProjectOverview extends Component {
    render() {
        return (
            <div className={'bg-neutral-800 w-screen h-screen flex justify-center items-center'}>
                <main className={'rounded-s w-4/6 h-4/6 drop-shadow-lg text-white bg-neutral-900'}>
                    <header
                        className={
                            'flex items-center border-b-2 border-gray-800 border-solid justify-between p-2'
                        }
                    >
                        <h1 className={'text-xl'}>Project selection</h1>
                        <ProfileSelectionComponent />
                    </header>
                    <section>
                        <div>
                            <div>Open folder</div>
                            <div>Clone</div>
                            <div>Init</div>
                        </div>
                        <div>
                            <div>Project groups</div>
                        </div>
                    </section>
                    <section>
                        <h1>Recent projects</h1>
                        <ul>
                            <li>GitFeather</li>
                            <li>DdgClone</li>
                        </ul>
                    </section>
                </main>
            </div>
        );
    }
}
