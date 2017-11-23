/// <reference types="react" />
import * as React from 'react';
export interface Props {
    className?: string;
    text: string;
}
/**
 * H1 compononent renders a heading
 */
export default class H1 extends React.Component<Props, any> {
    state: any;
    props: any;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}
