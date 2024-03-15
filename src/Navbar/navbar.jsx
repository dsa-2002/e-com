import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
// import mylogo from "../images/logoimg.png"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './navbar.css'
// import { SvgIcon } from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
const Navbar = () => {
    const navigate= useNavigate();

    function showSideBar(){
      const sidebar=document.querySelector('.sidebar')
      // if(sidebar)
      sidebar.style.display='flex'
    }

    function hideSideBar(){
      const sidebar=document.querySelector('.sidebar')
      if(sidebar)
      sidebar.style.display='none'
    }



    return (
    
    <div className="navbar">

      {/* <div className="navlogo"> */}
        {/* <img src={mylogo} alt="image" style={{cursor:'pointer',width:'150px',height:'90px',marginLeft: '40px'}}/> */}
        {/* <h1 style={{cursor:'pointer',width:'150px',height:'90px',marginLeft: '40px'}>E-Commerce</h1> */}
        {/* <h1 className="nav-logo-header">E-Comm</h1> */}
      {/* </div> */}
      <div className="sidebar">
        {/* <h1 className="nav-items-header " onClick={hideSideBar}><svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></h1> */}
        <h1 className="nav-items-header " onClick={hideSideBar}><CancelRoundedIcon  style={{ color: 'white',fontSize:'50' }} /></h1>
        <h1 className="nav-items-header"onClick={()=> navigate('/')}>Dashboard</h1>
        <h1 className="nav-items-header"onClick={()=> navigate('/products')}>Products</h1>
        <h1 className="nav-items-header"onClick={()=> navigate('/orders')}>Orders</h1>
        <h1 className="nav-items-header"onClick={()=> navigate('/calender')}>Calender View</h1>
     </div>
        
    

      <div className="nav-items">
        <h1 className="nav-items-header ">E-Com</h1>
        <h1 className="nav-items-header"onClick={()=> navigate('/')}>Dashboard</h1>
        <h1 className="nav-items-header"onClick={()=> navigate('/products')}>Products</h1>
        <h1 className="nav-items-header"onClick={()=> navigate('/orders')}>Orders</h1>
        <h1 className="nav-items-header"onClick={()=> navigate('/calender')}>Calender View</h1>
        {/* <h1 className="menu-button"onClick={showSideBar}><svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 -960 960 960"   width="45"  style={{ color: 'white' }} ><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></h1> */}
        
        <h1 className="menu-button"onClick={showSideBar}><MenuRoundedIcon  style={{ color: 'white',fontSize:'50' }} /></h1>
        {/* <h1 className="menu-button"onClick={showSideBar}><SvgIcon color="primary"><CancelRoundedIcon/></SvgIcon></h1> */}


        
         {/* <Button><CancelRoundedIcon/></Button> */}
    
      
      </div>
    </div>
  )
}

export default Navbar


