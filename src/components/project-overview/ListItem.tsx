import { Component, HTMLAttributes } from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import cx from 'classnames';

export interface ListItemProperties extends HTMLAttributes<HTMLDivElement> {
    selected?: boolean;
}

export default class ListItem extends Component<ListItemProperties> {
    static defaultProps = {
        selected: false
    };
    render() {
        return (
            <div
                {...this.props}
                className={cx(
                    this.props.className,
                    'h-12 flex pl-8 justify-between cursor-pointer select-none items-center',
                    {
                        'list-item__gradient': this.props.selected
                    }
                )}
            >
                {this.props.children}
                {this.props.selected ? (
                    <ChevronRightIcon className={'h-6 w-6 r-0'} color={'#fffff'} />
                ) : (
                    ''
                )}
            </div>
        );
    }
}
