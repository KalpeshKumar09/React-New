import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup'
import { UserAuthContextProvider } from '../context/UserAuthContext';

const MainRoute = () => {
    return (
        <>
        <UserAuthContextProvider>
        <Router>
            <Routes>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Signup' element={<Signup/>}/>
            </Routes>
        </Router>
        </UserAuthContextProvider>
        
        </>
    );
};

export default MainRoute;