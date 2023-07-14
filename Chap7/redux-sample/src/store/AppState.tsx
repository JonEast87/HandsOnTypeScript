import { combineReducers } from 'redux';
import { UserReducer } from './UserReducer';
import { PostReducer} from "./PostReducer";

// this will be our sum of all the reducers passed
export const rootReducer = combineReducers({
    user: UserReducer,
    post: PostReducer
});

export type AppState = ReturnType<typeof rootReducer>;
