import React from 'react';
import logo from './logo.png'

const header = ()=>{
    return(
        <>
        <div className='header-cont'>
        <img className="logo" alt="logo" src={logo}></img>
        <h1 className='main-h'>Composite Calculator</h1>
        <h3 className='description'>You are here to calculate your composite, <span>so let's dig in!</span></h3>
        </div>
        </>
    ) 
}

export default header;