import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import toggleSlice from './reducers/toggleSlice';

const saga = createSagaMiddleware();

export default configureStore({
	reducer: {
        toggle: toggleSlice
	},
});
