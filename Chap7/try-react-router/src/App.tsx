import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";
import ScreenC from "./ScreenC";

function App() {
  const renderScreenC = (props: any) => {
    console.log('ScreenC props', props);
    return <ScreenC {...props} message='This is Screen C'/>
  };

  return (
    <Routes>
      <Route path='/' Component={ScreenA}></Route>
      <Route path='/b' Component={ScreenB}></Route>
      {/*Book wanted to utilize an old react-router-dom method 'render' with ScreenC but it is no longer in usage*/}
      <Route path='/c/:userid' Component={renderScreenC}></Route>
    </Routes>
  );
}

export default App;
