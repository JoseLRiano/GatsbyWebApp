import React from 'react';
import {Icon} from '@iconify/react';
import stormIcon from '@iconify/icons-mdi/weather-pouring';
import fireIcon from '@iconify/icons-mdi/fire';
import summitIcon from '@iconify/icons-mdi/summit';

import './locationMarker.css';


const locationMarker = ({ lat, lng, onClick, icon }) => {
    
    const iconItem = icon === "summitIcon" ? summitIcon : fireIcon;
    
    return (
        <div className="location-marker" onClick={onClick}>
        {/* {console.log(icon === "fireIcon" && "Hello")} */}
            <Icon icon={iconItem} className={icon === "summitIcon" ? "summitIcon" : "fireIcon"} />
        </div>
    )
}

export default locationMarker;
