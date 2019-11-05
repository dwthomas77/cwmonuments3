import React from 'react';
import { shallow } from 'enzyme';
import { ListItem } from './index';

const clickHandler = () => {};
const isActive = false;

it('renders empty without 💣', () => {
    const props = {
        clickHandler,
        isActive,
    };
    shallow(<ListItem {...props} />);
});

it('renders clickable button correctly', () => {
    const props = {
        clickHandler,
        isActive,
    };
    shallow(<ListItem {...props} />);
});
