import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MapOverlay from './MapOverlay';
import './styles.scss';

const convertLocationToGoogle = ({ latitude, longitude }) => ({ lat: latitude, lng: longitude });
const defaultLocation = { latitude: 37.377537, longitude: -78.796028 }; // Appomattox Court House
const mapId = 'cwmap';
const DEFAULT_ZOOM = 15;
const defaultMapType = 'roadmap';

/**
 * Mounts and Updates a Google Map
 *
 * @typedef {Object} Location - an object containing GPS coordinates
 * @property {number} latitude
 * @property {number} longitude
 * @property {number} zoom
 * @property {string} mapType
 *
 * @param {Object} googleMaps
 * @param {Location} location
 */
const MonumentMap = ({ googleMaps, location }) => {
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const containerRef = useRef(null);
    useEffect(() => {
        if (googleMaps && !map) {
            const newMap = new googleMaps.Map(
                document.querySelector(`#${mapId}`),
                {
                    center: convertLocationToGoogle(location),
                    zoom: DEFAULT_ZOOM,
                    disableDefaultUI: true,
                    draggable: false,
                },
            );
            const newMarker = new googleMaps.Marker({ position: convertLocationToGoogle(location), map: newMap });
            setMap(newMap);
            //setMarker(newMarker);
        } else if (map) {
            const { mapType, zoom } = location;
            map.panTo(convertLocationToGoogle(location));
            marker.setMap(null);
            const newMarker = new googleMaps.Marker({ position: convertLocationToGoogle(location) });
            // newMarker.setMap(map);
            // setMarker(newMarker);

            // map.setZoom(zoom || DEFAULT_ZOOM);
            // map.setMapTypeId(mapType || defaultMapType);
            // map.setTilt(45);
        }
    });

    const currentHeight = containerRef.current ? containerRef.current.clientHeight : 0;
    const currentWidth = containerRef.current ? containerRef.current.clientWidth : 0;

    const mapStyle = {
        height: `${currentHeight}px`,
        width: `${currentWidth}px`,
    };

    return (
        <div className="cwmap-container" ref={containerRef}>
            <MapOverlay />
            <div id={mapId} className="cwmap" style={mapStyle}>Google Maps</div>
        </div>
    );
};

MonumentMap.propTypes = {
    googleMaps: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object,
    ]),
    location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
    }).isRequired,
};

MonumentMap.defaultProps = {
    googleMaps: null,
};

export function mapStateToProps(state) {
    const { resources, selectedResource } = state;
    const location = selectedResource ? resources[selectedResource].location : defaultLocation;
    return { location };
}

export default connect(
    mapStateToProps,
)(MonumentMap);
