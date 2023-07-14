export const USER_TYPE = 'USER_TYPE';

export interface User {
    id: string;
    username: string;
    email: string;
    city: string;
}

// our type to represent the user
export interface UserAction {
    type: string;
    payload: User | null;
}

// handles type and payload
export const UserReducer =  (state: User | null = null, action:
    UserAction): User | null => {
    switch(action.type) {
        case USER_TYPE:
            console.log('user reducer', action.payload);
            return action.payload;
        default:
            return state;
    }
};