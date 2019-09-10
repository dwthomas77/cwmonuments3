import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'redux-starter-kit';
import states from '../../data/states.json';
import selectedResourceSlice, { UPDATE_SELECTED_RESOURCE } from '../../reducers/selectedResource';
import resourcesSlice from '../../reducers/resources';
import filterSlice from '../../reducers/filter';
import ListItem from '../ListItem';
import Filter from '../Filter';
import './styles.scss';

const List = (props) => {
    const {
        items,
        selectedResource: selectedKey,
        UPDATE_SELECTED_RESOURCE: updateSelectedResource,
    } = props;
    return (
        <div>
            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>MONUMENTS</div>
            <Filter />
            <ul>
                { Object.keys(items).map((key) => (
                    <ListItem
                        {...items[key]}
                        itemKey={key}
                        clickHandler={updateSelectedResource}
                        isActive={selectedKey === key}
                        key={key}
                    />
                )) }
            </ul>
        </div>
    );
};

List.propTypes = {
    items: PropTypes.object.isRequired,
    selectedResource: PropTypes.string,
    UPDATE_SELECTED_RESOURCE: PropTypes.func.isRequired,
};

List.defaultProps = {
    selectedResource: '',
};

const selectResources = (state) => resourcesSlice.selectors.getResources(state);
const selectFilter = (state) => filterSlice.selectors.getFilter(state);

const selectFilteredResources = createSelector(
    [selectResources, selectFilter],
    (resources, filter) => {
        if (!filter) {
            return resources;
        }
        const filteredResults = {};
        Object.keys(resources).filter((key) => {
            const { city, state } = resources[key];
            return city.toLowerCase().indexOf(filter.toLowerCase()) !== -1
                || states[state].toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        }).forEach((key) => { filteredResults[key] = resources[key]; });

        return filteredResults;
    },
);

const mapStateToProps = (state) => {
    return {
        items: selectFilteredResources(state),
    };
};

const mapDispatchToProps = {
    [UPDATE_SELECTED_RESOURCE]: selectedResourceSlice.actions[UPDATE_SELECTED_RESOURCE],
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(List);
