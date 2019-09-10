import React from 'react';
import Details from './components/Details';
import List from './components/List';
import './App.scss';

const App = () => (
    <div className="App">
        <h2 className="title">CW Monuments</h2>
        <div className="flex-layout">
            <List />
            <Details />
        </div>

    </div>
);

export default App;
