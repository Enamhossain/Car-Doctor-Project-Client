import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../Shared/Footer/Footers';
import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
            <Footers></Footers>
        </div>
    );
};

export default Main;