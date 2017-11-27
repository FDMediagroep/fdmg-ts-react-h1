import * as React from 'react';
import * as renderer from 'react-test-renderer';
import H1 from '../src/H1';

console.info = function() {};

test('H1 renders correctly', () => {
    let component = renderer.create(
        <H1>test h1</H1>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(
        <H1/>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(
        <H1><span>testing 123</span><div>testing456</div></H1>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('H1 renders correctly with CSS class', () => {
    const component = renderer.create(
        <H1 className={'title'}>test h1</H1>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});