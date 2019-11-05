import React from 'react';
import { shallow } from 'enzyme';
import { Details, mapStateToProps } from './index';

it('renders without 💣', () => {
    shallow(<Details />);
});

it('renders an empty selection', () => {
    shallow(<Details resource={{}} />);
});

it('renders with keys', () => {
    const resource = {
        key1: 'test1',
        key2: 'test2',
    };
    const key1Element = (<span className="detail-key">key1:</span>);
    const wrapper = shallow(<Details resource={resource} />);
    expect(wrapper.contains(key1Element)).toEqual(true);
});

it('maps state to props', () => {
    const state = {
        resources: {},
        selectedResources: {},
    };
    const props = mapStateToProps(state);
    expect(props.resource).toBeDefined();
});
