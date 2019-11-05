import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import states from '../../data/states.json';

export const ListItem = (props) => {
    const { city, clickHandler, id, isActive, itemKey, state } = props;
    const liClickHandler = () => { clickHandler(itemKey); };
    const classes = classNames('list-group-item', { 'list-item--active': isActive });
    const displayName = `${city}, ${states[state]}`;
    return (
        <li className={classes}>
            <button type="button" onClick={liClickHandler} data-test-id={id}>{displayName}</button>
        </li>
    );
};

ListItem.propTypes = {
    city: PropTypes.string,
    clickHandler: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
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
