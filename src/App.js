import React, { useEffect, useState } from 'react';
import loadGoogleMapsApi from 'load-google-maps-api';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Details from './components/Details';
import HistoryBook from './components/HistoryBook';
import List from './components/List';
import MonumentMap from './components/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const googleApiManager = (setGoogleMaps) => () => {
    loadGoogleMapsApi({ key: process.env.REACT_APP_GOOGLE_API_KEY })
        .then((googleMaps) => {
            setGoogleMaps(googleMaps);
        });
};

const App = () => {
    const [googleMaps, setGoogleMaps] = useState(0);
    useEffect(googleApiManager(setGoogleMaps), []);
    return (
        <Container className="App" fluid>
            <Row className="header" noGutters>
                <Col>
                    <h2 className="title">CW Monuments</h2>
                </Col>
            </Row>
            <Row className="tiles" noGutters>
                <Col sm={12} md={4}>
                    <List />
                    <Details />
                </Col>
                <Col className="right-col" sm={12} md={8}>
                    <HistoryBook />
                    <MonumentMap googleMaps={googleMaps} />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
