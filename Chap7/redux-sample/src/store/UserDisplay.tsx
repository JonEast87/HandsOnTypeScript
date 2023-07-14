import React from 'react';
import { AppState } from './AppState';
import {Provider, useSelector} from 'react-redux';

// this Hook will accept the function of the entire aggregated reducer state to return only the reducer state while providing
// some basic displays for said user
const UserDisplay = () => {
    const user = useSelector((state: AppState) => state.user);

    if (user) {
        console.log('user', user);
        return (<React.Fragment>
            <div>
                <label>username:</label>
                &nbsp;{user.username}
            </div>
            <div>
                <label>email:</label>
                &nbsp;{user.email}
            </div>
            <div>
                <label>city:</label>
                &nbsp;{user.city}
            </div>
        </React.Fragment>);
    } else {
        return null;
    }
}

export default UserDisplay;