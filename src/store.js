import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import logger from 'redux-logger';
import { reduxBatch } from '@manaflair/redux-batch';
import filter from './reducers/filter';
import resources from './reducers/resources';
import images from './reducers/images';
import selectedResource from './reducers/selectedResource';

const reducer = {
    filter: filter.reducer,
    images: images.reducer,
    resources: resources.reducer,
    selectedResource: selectedResource.reducer,
};

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [reduxBatch],
});

export default store;
