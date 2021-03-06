import * as React from 'react';

export interface Props {
    className?: string;
    children?: JSX.Element[]|HTMLElement[]|string|number;
}

/**
 * H1 compononent renders a heading
 */
export default class H1 extends React.Component<Props, any> {
    public state: any;
    public props: any;

    constructor(props: Props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <h1 className={this.props.className}>{this.props.children}</h1>
        );
    }
}
