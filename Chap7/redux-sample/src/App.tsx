import React, { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { USER_TYPE} from "./store/UserReducer";
import UserDisplay from './store/UserDisplay';
import PostDisplay from "./PostDisplay";
import { POST_TYPE } from './store/PostReducer'

// we will be grabbing the id to check against our JSON API for the matching userid
function App() {
  const [userid, setUserId] = useState(0);
  const dispatch = useDispatch();
  const [postid, setPostId] = useState(0);
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

  const onChangePostId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const postIdFromInput = e.target.value ? Number(e.target.value) : 0;
    setPostId(postIdFromInput);

    const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/' + postIdFromInput);

    if (postResponse.ok) {
      const post = await postResponse.json();
      console.log('post', post);

      dispatch({
        type: POST_TYPE,
        payload: {
          id: post.id,
          title: post.title,
          body: post.body
        }
      });
    }
  }

  return (
    <React.Fragment>
      <div style={{ width: "300px" }}>
        <div className="App">
          <label>user id</label>
          <input value={userid} onChange={onChangeUserId} />
        </div>
        <UserDisplay />
      </div>

      <br />

      <div style={{ width: "300px"}}>
        <div className="App">
          <label>post id</label>
          <input value={postid} onChange={onChangePostId} />
        </div>
        <PostDisplay />
      </div>
    </React.Fragment>
  );
}

export default App;
