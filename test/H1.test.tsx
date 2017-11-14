import * as React from 'react';
import * as renderer from 'react-test-renderer';
import H1 from '../src/H1';

console.info = function() {};

test('H1 renders correctly', () => {
    const component = renderer.create(
        <H1 text={'test h1'}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('H1 renders correctly with CSS class', () => {
    const component = renderer.create(
        <H1 text={'test h1'} className={'title'}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});