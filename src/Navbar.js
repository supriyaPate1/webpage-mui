import React from 'react'
import './science.css'
import { Outlet, Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
export default function Navbar() {
  return (
    <>
      <div className='Nav'>
                <div className='icon'>
                  <img src='image (1).png' alt="no IMG"/>
                </div>   
                <div className='abv'>
                  
                </div> 
                <div className='link'>
                  <Link to ="/">Home</Link>
                </div>
                <div className='link'>
                  <Link to="/about">Product</Link>
                </div>
                <div className='link'>
                  <Link to="/resource">Resources</Link>
                </div>
                <div className='link'>
                  <Link to="/contact">Company </Link>
                </div>
                <div className='link'>
                  <Link id='getS' to="/contact">GetStarted</Link>
                </div>
                <div className='link' id='search'>
                <SearchIcon/>Search
                </div>
                <div className='space'></div>
            </div>  
            <Outlet/>
    </>
  )
}
