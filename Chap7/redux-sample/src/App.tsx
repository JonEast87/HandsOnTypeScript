import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { USER_TYPE} from "./store/UserReducer";
import UserDisplay from './store/UserDisplay';
// import ContextTester from './ContextTester';
import './App.css';

// we will be grabbing the id to check against our JSON API for the matching userid
function App() {
  const [userid, setUserId] = useState(0);
  const dispatch = useDispatch();
  const onChangeUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const useridFromInput = e.target.value ? Number(e.target.value) : 0;
    console.log('userid', useridFromInput);
    setUserId(useridFromInput);

    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    if (userResponse.ok) {
      const users = await userResponse.json();
      console.log('users', users);

      const usr = users.find((userItem: any) => {
        return userItem && userItem.id === useridFromInput;
      });
      console.log('usr', usr);
      dispatch({
        type: USER_TYPE,
        payload: {
          id: usr.id,
          username: usr.username,
          email: usr.email,
          city: usr.address.city,
        }
      });
    }
  }
  return (
    <React.Fragment>
      <div className="App">
        <label>user id</label>
        <input value={userid} onChange={onChangeUserId} />
      </div>
      <UserDisplay />
    </React.Fragment>
  );
}

export default App;
