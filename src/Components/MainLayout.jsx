import react from 'react';
import footer from './Footer';
import Header from './Header';

const MainLayout = ({childern}) => {
 return <div>
    <Header/>
    {childern}
    <footer/>
 </div>  
};

export default MainLayout;