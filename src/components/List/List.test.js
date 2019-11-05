import React from 'react';
import { shallow } from 'enzyme';
import { UPDATE_SELECTED_RESOURCE } from '../../reducers/selectedResource';
import { List, mapStateToProps } from './index';
import { ListItem } from '../ListItem';

const emptyItems = {};
const items = {
    test1: {
        city: 'test1',
        state: 'NH',
    },
    test2: {
        city: 'test2',
        state: 'MA',
    },
};
const state = {
    filter: '',
    resources: items,
    selectedResource: '',
};
const filteredState = {
    filter: 'test2',
    resources: items,
    selectedResource: '',
};

it('renders empty without 💣', () => {
    const props = {
        items: emptyItems,
        [UPDATE_SELECTED_RESOURCE]: () => {},
    };
    shallow(<List {...props} />);
});

it('renders list items with the correct props', () => {
    const props = {
        items,
        [UPDATE_SELECTED_RESOURCE]: () => {},
    };
    const wrapper = shallow(<List {...props} />);
    expect(wrapper.find(ListItem)).toHaveLength(2);
});

it('maps state to props correctly', () => {
    const props = mapStateToProps(state);
    expect(props.items).toBeDefined();
    expect(props.selectedResource).toBeDefined();
    expect(props.items.test1.city).toEqual(items.test1.city);
});

it('filters the items', () => {
    const props = mapStateToProps(filteredState);
    expect(props.items.test2.city).toEqual(items.test2.city);
    expect(props.items.test1).toBeUndefined();
});
