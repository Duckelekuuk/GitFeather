import { Component, HTMLAttributes } from 'react';
import cx from 'classnames';

export default class TabPage extends Component<HTMLAttributes<HTMLDivElement>> {
    render() {
        return <div {...this.props} className={cx(this.props.className, 'h-12 pl-8 justify-center select-none items-center')}></div>;
    }
}
