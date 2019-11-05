import React from 'react';
import { shallow } from 'enzyme';
import { Filter } from './index';

it('renders without 💣', () => {
    shallow(<Filter />);
});

it('renders an input field', () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper.find('input')).toHaveLength(1);
});

it('changes state when input is entered', () => {
    const wrapper = shallow(<Filter />);
    wrapper.find('input').simulate('change', { target: { value: 'test1' } });
    expect(wrapper.state('value')).toEqual('test1');
});
