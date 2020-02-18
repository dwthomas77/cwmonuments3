import { createSlice } from 'redux-starter-kit';
import history from '../../data/history.json';

export const UPDATE_HISTORY_ENTRIES = 'UPDATE_HISTORY_ENTRIES';

const historySlice = createSlice({
    slice: 'history',
    initialState: history,
    reducers: {
        [UPDATE_HISTORY_ENTRIES]: (state, action) => action.payload,
    },
});

export default historySlice;
