import * as React from 'react';

/**
 * H1 compononent renders a heading
 */
export default class H1 extends React.Component {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
        console.info('H1 component', props);
    }

    componentDidMount() {
        console.info('H1 mounted');
    }
        
    componentWillUnmount() {
        console.info('H1 will unmount');
    }

    componentWillReceiveProps(nextProps) {
        console.info('H1 next props', nextProps);
    }

    render() {
        return (
            <h1 className={this.props.className}>{this.props.text}</h1>
        );
    }
}
