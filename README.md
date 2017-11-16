[![Build Status](https://travis-ci.org/FDMediagroep/fdmg-ts-react-h1.svg?branch=master)](https://travis-ci.org/FDMediagroep/fdmg-ts-react-h1)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fdmg-ts-react-h1/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fdmg-ts-react-h1?branch=master)

# fdmg-ts-react-h1
[ReactJS](https://reactjs.org/) H1 component. This component renders an H1 header.
You might think it silly to have this as a separate component. But when you use an H1-element multiple times in your
project then having that as a component might eventually save you some bytes.

## Installation
- Run `npm i --save-dev fdmg-ts-react-h1`

or

- Run `yarn add fdmg-ts-react-h1 --dev`

## Usage
### TypeScript
```
import * as React from 'react';
import H1 from 'fdmg-ts-react-h1';

export default class foo {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
    }

    render() {
        return (<H1 text={'title'} className={'css-class-name'} />);
    }
}
```

### Resulting HTML
```
<h1 className="css-class-name">title</h1>
```