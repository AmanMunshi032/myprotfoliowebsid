import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Naveber from '../components/Naveber/Naveber';

const Root = () => {
    return (
        <div>
          <Naveber></Naveber>  
         <Outlet></Outlet> 
         <Footer></Footer> 
        </div>
    );
};

export default Root;