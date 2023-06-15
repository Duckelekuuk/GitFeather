import { Component } from 'react';
import TabWindow from '@/components/project-overview/TabWindow';
import TabPage from '@/components/project-overview/TabPage';
import ProjectList from '@/components/project-overview/ProjectList';

export default class ProjectOverview extends Component {
    render() {
        return (
            // I would like this to be a pop-up window
            <div
                className={
                    'w-screen h-screen flex justify-center items-center text-white bg-[#00040F]'
                }
            >
                <div
                    className={
                        'rounded-lg w-4/6 h-4/6 drop-shadow-lg text-white bg-[#00040F] pop-shadow'
                    }
                >
                    <header
                        className={
                            'flex items-center border-b border-neutral-600 border-solid justify-between px-6 h-1/6'
                        }
                    >
                        <h1 className={'text-xl font-light'}>Project selection</h1>
                        {/*<ProfileSelectionComponent />*/}
                    </header>
                    <main className={'flex h-5/6'}>
                        <TabWindow defaultPage={0} tabWidth={'w-1/4'}>
                            <TabPage title={'Open'}>
                                <TabWindow defaultPage={0} tabWidth={'w-1/3'}>
                                    <TabPage title={'Recents'}>
                                        <ProjectList
                                            projects={[
                                                {
                                                    name: 'OpenAudioMc',
                                                    path: '~/Documents/OpenAudioMC'
                                                },
                                                {
                                                    name: 'GitFeather',
                                                    path: '~/Documents/GitFeather'
                                                }
                                            ]}
                                        />
                                    </TabPage>
                                    <TabPage title={'Open folder'}></TabPage>
                                </TabWindow>
                            </TabPage>
                            <TabPage title={'Clone'}>
                                <div>Form clone</div>
                            </TabPage>
                            <TabPage title={'Init'}>
                                <div>Form</div>
                            </TabPage>
                        </TabWindow>
                    </main>
                </div>
            </div>
        );
    }
}
