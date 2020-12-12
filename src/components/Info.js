import React from 'react'
import './info.css';

const Info = ({ info }) => {
    return (
        <div className="location-info">
                <h2>Weather Event Info: </h2>
                <ul>
                    <li>Title: <strong>{info.title}</strong></li>
                    <li>Date: <strong>{info.date}</strong></li>
                </ul>
        </div>
    )
}

export default Info
