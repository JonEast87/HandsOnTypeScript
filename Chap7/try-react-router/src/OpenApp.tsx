import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScreenA from './ScreenA';
import ScreenB from "./ScreenB";

function App() {
    return (
        <Routes>
            <Route path="/" Component={ScreenA} />
            <Route path="/b" Component={ScreenB} />
        </Routes>
    );
}

export default App;