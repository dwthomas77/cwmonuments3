import React from 'react';

const Entry = ({ entry: item }) => {
    console.log(item);
    return (
        <div className="history-entry">
            <p className="history-entry__text">{item.entry}</p>
        </div>
    );
};

export default Entry;
