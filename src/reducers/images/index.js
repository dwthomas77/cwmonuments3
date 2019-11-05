import { createSlice } from 'redux-starter-kit';
import images from '../../data/photos.json';

export const UPDATE_ALL_IMAGES = 'UPDATE_ALL_IMAGES';

const imagesSlice = createSlice({
    slice: 'images',
    initialState: images,
    reducers: {
        [UPDATE_ALL_IMAGES]: (state, action) => action.payload,
    },
});

export default imagesSlice;
