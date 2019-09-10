import React from 'react';
import { connect } from 'react-redux';
import debounce from 'debounce';
import wretch from 'wretch';
import filterSlice, { UPDATE_FILTER } from '../../reducers/filter';
import './styles.scss';

class Filter extends React.Component {
    state = { value: '' };

    changeHandler = (event) => {
        const { target: { value } } = event;
        this.setState({ value });
        this.debouncedSetFilter(value);
    }

    setFilter = (searchTerm) => {
        this.props[UPDATE_FILTER](searchTerm);
    }

    constructor(props) {
        super(props);
        this.debouncedSetFilter = debounce(this.setFilter, 50);
    }

    render() {
        const { value } = this.state;
        return (
            <div className="filter">
                <input type="text" value={value} onChange={this.changeHandler} />
                <span>Filter your results</span>
            </div>
        );
    }
}

const mapDispatchToProps = {
    [UPDATE_FILTER]: filterSlice.actions[UPDATE_FILTER],
};

export default connect(
    null,
    mapDispatchToProps,
)(Filter);
