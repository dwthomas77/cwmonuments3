import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import states from '../../data/states.json';

const ListItem = (props) => {
    const { city, clickHandler, isActive, itemKey, state } = props;
    const liClickHandler = () => { clickHandler(itemKey); };
    const classes = classNames('list-item', { 'list-item--active': isActive });
    const displayName = `${city}, ${states[state]}`;
    return (
        <li className={classes}>
            <button type="button" onClick={liClickHandler}>{displayName}</button>
        </li>
    );
};

ListItem.propTypes = {
    city: PropTypes.string,
    clickHandler: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    itemKey: PropTypes.string,
    state: PropTypes.string,
};

ListItem.defaultProps = {
    city: '',
    itemKey: null,
    state: '',
};

export default ListItem;
