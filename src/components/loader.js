import React from 'react'
import loader from '../images/25.gif'
import './loader.css';


const Loader = () => {
    return (
        <div className="loader"> 
            <img src={loader} alt="loading gif" />    
            <h1>Fetching Data...</h1>
        </div>
    )
}

export default Loader;
