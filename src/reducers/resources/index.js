import { createSlice } from 'redux-starter-kit';
import monuments from '../../data/monuments.json';

export const UPDATE_ALL_RESOURCES = 'UPDATE_ALL_RESOURCES';

const resources = createSlice({
    slice: 'resources',
    initialState: monuments,
    reducers: {
        [UPDATE_ALL_RESOURCES]: (state, action) => {
            return action.payload;
        },
    },
});

export default resources;
