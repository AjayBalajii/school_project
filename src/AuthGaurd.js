import React, { useContext } from 'react';
import AppContext from './context/context';
import LandingPage from './pages/login/firstpage';
import Home from './pages/home/home';
const AuthGaurd = () => {
    const context  = useContext(AppContext);
    const { currentUser } = context;
    return currentUser==null?<LandingPage/>:<Home/>;
}
export default AuthGaurd;