import React from 'react';
import {Icon} from '@iconify/react';
import stormIcon from '@iconify/icons-mdi/weather-pouring';
import fireIcon from '@iconify/icons-mdi/fire';
import summitIcon from '@iconify/icons-mdi/summit';

import './locationMarker.css';


const locationMarker = ({ lat, lng, onClick, icon }) => {
    return (
        <div className="location-marker" onClick={onClick}>
        {/* {console.log(typeof(icon))} */}
            <Icon icon={icon === "stormIcon" ? stormIcon : icon === "fireIcon" ? fireIcon : summitIcon} className={icon} />
        </div>
    )
}

export default locationMarker;
