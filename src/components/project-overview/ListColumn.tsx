import { Component, HTMLAttributes } from 'react';

export default class ListColumn extends Component<HTMLAttributes<HTMLDivElement>, any> {
    render() {
        return (
            <section {...this.props} className={this.props.className + ' h-full'}>
                {this.props.children}
            </section>
        );
    }
}
