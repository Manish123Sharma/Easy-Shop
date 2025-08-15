import React from 'react';
import './index.css'
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/home' element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
