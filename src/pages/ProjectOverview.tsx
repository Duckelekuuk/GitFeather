import { Component } from 'react';
import ProfileSelectionComponent from '@/components/profile-selection/ProfileSelection';
import ListColumn from '@/components/project-overview/ListColumn';
import ListItem from '@/components/project-overview/ListItem';

export default class ProjectOverview extends Component {
    render() {
        return (
            <div className={'select-background w-screen h-screen flex justify-center items-center'}>
                <div
                    className={
                        'rounded-s w-4/6 h-4/6 drop-shadow-lg text-white bg-[#00040F] pop-shadow'
                    }
                >
                    <header
                        className={
                            'flex items-center border-b-2 border-gray-800 border-solid justify-between px-6 h-1/6'
                        }
                    >
                        <h1 className={'text-xl font-light'}>Project selection</h1>
                        {/*<ProfileSelectionComponent />*/}
                    </header>
                    <main className={'flex h-5/6'}>
                        <ListColumn className={'w-1/4'}>
                            <ListItem selected={true}>Open</ListItem>
                            <ListItem>Clone</ListItem>
                            <ListItem>Init</ListItem>
                        </ListColumn>
                        <ListColumn className={' w-1/4'}>
                            <ListItem>Open Folder</ListItem>
                            <ListItem selected={true}>Open Recent</ListItem>
                        </ListColumn>
                        <ListColumn className={'w-2/4'}>
                            <ListItem>GitFeather</ListItem>
                            <ListItem>OpenAudio</ListItem>
                        </ListColumn>
                    </main>
                </div>
            </div>
        );
    }
}
