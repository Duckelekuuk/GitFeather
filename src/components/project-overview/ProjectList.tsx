import { Component, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ProjectDetails } from '@shared/models/ProjectDetails';

export interface ProjectListState {
    projects: ProjectDetails[];
}

export default class ProjectList extends Component<HTMLAttributes<HTMLDivElement>, ProjectListState> {
    constructor(props: HTMLAttributes<HTMLDivElement>) {
        super(props);
        this.state = {
            projects: []
        };
    }

    async componentDidMount() {
        const recentProjects = await window.api.getRecentProjects();
        this.setState({ projects: recentProjects.projects });
    }

    render() {
        const emptyPlaceHolder = (
            <div className={'flex flex-col h-12 text-center justify-center select-none'}>
                <div className={'text-sm'}>You have no recent projects</div>
            </div>
        );
        const projectItems = this.state.projects.map((project, index) => (
            <div
                key={index}
                className={cx(
                    'flex flex-col h-12 pl-8 justify-center select-none',
                    'hover:bg-gray-100/[.1] hover:drop-shadow transition duration-75'
                )}
            >
                <div className={'text-sm'}>{project.name}</div>
                <div className={'text-xs text-gray-500'}>{project.path}</div>
            </div>
        ));

        return <div className={'flex flex-col'}>{this.state.projects.length == 0 ? emptyPlaceHolder : projectItems}</div>;
    }
}
