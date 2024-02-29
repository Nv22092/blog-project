import react from 'react'

const MainLayout = ({childern}) => {
 return <div>
    <Header/>
    {childern}
    <footer/>
 </div>  
};

export default MainLayout;