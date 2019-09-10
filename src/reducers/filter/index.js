import { createSlice } from 'redux-starter-kit';

export const UPDATE_FILTER = 'UPDATE_FILTER';

const filter = createSlice({
    slice: 'filter',
    initialState: '',
    reducers: {
        [UPDATE_FILTER]: (state, action) => {
            return action.payload;
        },
    },
});

export default filter;
