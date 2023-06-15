import { Component, HTMLAttributes } from 'react';
import cx from 'classnames';

export interface Project {
    name: string;
    path: string;
}

export interface ProjectListProperties extends HTMLAttributes<HTMLDivElement> {
    projects: Project[];
}

export default class ProjectList extends Component<ProjectListProperties> {
    render() {
        return (
            <div className={'flex flex-col'}>
                {this.props.projects.map((project) => (
                    <div
                        className={cx(
                            'flex flex-col h-12 pl-8 justify-center select-none',
                            'hover:bg-gray-100/[.1] hover:drop-shadow transition duration-75'
                        )}
                    >
                        <div className={'text-sm'}>{project.name}</div>
                        <div className={'text-xs text-gray-500'}>{project.path}</div>
                    </div>
                ))}
            </div>
        );
    }
}
