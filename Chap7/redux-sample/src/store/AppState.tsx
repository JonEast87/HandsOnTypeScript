import { combineReducers } from 'redux';
import { UserReducer } from './UserReducer';

// this will be our sum of all the reducers passed
export const rootReducer = combineReducers({
    user: UserReducer
});

export type AppState = ReturnType<typeof rootReducer>;
