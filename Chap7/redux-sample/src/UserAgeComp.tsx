import React, { useContext } from 'react';
import { TestContext } from './ContextTester';


const UserAgeComp = () => {
    // this object destructing will ensure only userage is passed to the useContext function
    const { userage } = useContext(TestContext);

    return <div>
        {userage}
    </div>
};

export default UserAgeComp;
