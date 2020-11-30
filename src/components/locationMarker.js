import React from 'react';
import {Icon} from '@iconify/react';
import stormIcon from '@iconify/icons-mdi/weather-pouring';
import './locationMarker.css';


const locationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={stormIcon} className="location-icon" />
        </div>
    )
}

export default locationMarker;
