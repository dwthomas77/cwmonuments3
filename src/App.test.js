import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Details from './components/Details';
import List from './components/List';

it('renders without 💣', () => {
    shallow(<App />);
});

it('renders the title', () => {
    const wrapper = shallow(<App />);
    const title = <h2 className="title">CW Monuments</h2>;
    expect(wrapper.contains(title)).toEqual(true);
    expect(wrapper.contains(<List />)).toEqual(true);
});

it('renders the List component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<List />)).toEqual(true);
});

it('renders the Details component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Details />)).toEqual(true);
});
