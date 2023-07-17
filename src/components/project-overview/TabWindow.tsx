import React, { Component, HTMLAttributes, ReactNode } from 'react';
import TabPage from '@/components/project-overview/TabPage';
import cx from 'classnames';

export interface TabWindowProperties extends HTMLAttributes<HTMLDivElement> {
    defaultPage: number | null;
    tabWidth: string;
}

interface TabWindowState {
    activePage: number | null;
}

export default class TabWindow extends Component<TabWindowProperties, TabWindowState> {
    static defaultProps = {
        defaultPage: null,
        tabWidth: '1/4'
    } as TabWindowProperties;

    constructor(props: TabWindowProperties) {
        super(props);
        this.state = {
            activePage: null
        };
    }

    render() {
        const pages = React.Children.toArray(this.props.children).filter(
            (child: ReactNode) => React.isValidElement(child) && child.type === TabPage
        ) as React.ReactElement<HTMLAttributes<HTMLDivElement>>[];

        const { defaultPage, tabWidth, ...rest } = this.props;

        const activePageIndex = this.state.activePage || defaultPage;

        let activePage: React.ReactElement<HTMLAttributes<HTMLDivElement>> | null = null;
        if (activePageIndex !== null) {
            activePage = pages[activePageIndex] || null;
        }

        return (
            <div {...rest} className={`${this.props.className} flex w-full h-full`}>
                <div className={`flex flex-col h-full border-solid border-r border-neutral-600 ${tabWidth}`}>
                    {pages.map((value, index) => (
                        <div
                            key={index}
                            className={cx(
                                'w-full h-12 flex pl-8 justify-between select-none items-center transition duration-75',
                                'hover:bg-gray-100/[.1]',
                                {
                                    'bg-gray-100/[.04] drop-shadow': activePageIndex === index
                                }
                            )}
                            onClick={(event) => this.handleClick(value, index, event)}
                        >
                            {value?.props.title}
                        </div>
                    ))}
                </div>
                <div className={'flex-grow'}>{activePage?.props.children}</div>
            </div>
        );
    }

    handleClick(page: React.ReactElement<React.HTMLAttributes<HTMLDivElement>>, index: number, event: React.MouseEvent<HTMLDivElement>): void {
        this.setState({ activePage: index });
        page.props.onClick?.call(page, event);
    }
}
