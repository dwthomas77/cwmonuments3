import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Image from '../Image';
import './styles.scss';

const defaultImage = 'https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png';

export const Details = ({ image, resource }) => {
    const { city, state, name = null } = resource;
    const defaultName = `${city}, ${state}`;
    return (
        <div className="details">
            {city && <h4>{name || defaultName}</h4>}
            <div className="details--image-container">
                <Image url={image} />
            </div>
        </div>
    );
};

Details.propTypes = { image: PropTypes.string.isRequired, resource: PropTypes.object };
Details.defaultProps = { resource: {} };

export function mapStateToProps(state) {
    const { images, resources, selectedResource } = state;
    const getSelectedImage = () => {
        const resourceKey = Object.keys(images)
            .find((id) => (images[id].monument === selectedResource) && images[id].default);

        return resourceKey ? images[resourceKey].url : defaultImage;
    };


    return {
        image: selectedResource ? getSelectedImage() : '',
        resource: selectedResource ? resources[selectedResource] : {},
    };
}

export default connect(
    mapStateToProps,
)(Details);
