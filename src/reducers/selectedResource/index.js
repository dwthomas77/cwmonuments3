import { createSlice } from 'redux-starter-kit';

export const UPDATE_SELECTED_RESOURCE = 'UPDATE_SELECTED_RESOURCE';

const selectedResource = createSlice({
    slice: 'selectedResource',
    initialState: 'BOS1',
    reducers: {
        [UPDATE_SELECTED_RESOURCE]: (state, action) => action.payload,
    },
});

export default selectedResource;
