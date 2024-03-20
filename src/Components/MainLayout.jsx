import React from 'react';
import Footer from './Footer';
import Header from './Header';

const MainLayout = ({childern}) => {
 return <div>
    <Header/>
    {childern}
    <Footer/>
 </div>  
};

export default MainLayout;