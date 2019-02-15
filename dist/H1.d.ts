import * as React from 'react';
export interface Props {
    className?: string;
    children?: JSX.Element[] | HTMLElement[] | string | number;
}
/**
 * H1 compononent renders a heading
 */
export default class H1 extends React.Component<Props, any> {
    state: any;
    props: any;
    constructor(props: Props);
    render(): JSX.Element;
}
