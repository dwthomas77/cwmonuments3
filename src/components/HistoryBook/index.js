import React, { useState } from 'react';
import { connect } from 'react-redux';
import HistoryEntry from './HistoryEntry';
import './styles.scss';

const randomizeList = (array) => {
    const list = [...array];
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
};

export const HistoryBook = ({ history }) => {
    console.log(history);
    const [historyList] = useState(randomizeList(history));
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <section className="history-book">
            <HistoryEntry entry={historyList[currentIndex]} />
        </section>
    );
};

export const mapStateToProps = (state) => ({
    history: state.history,
});

export default connect(
    mapStateToProps,
)(HistoryBook);
