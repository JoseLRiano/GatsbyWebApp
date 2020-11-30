import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import './map.css';

const Map = ({ center, zoom }) => {
    const [data, setData] = useState();


    return (
        <div className="map">
            <GoogleMapReact 
                bootstrapURLKeys={{ 
                    key: ''
                }}
                defaultCenter={center}
                defaultZoom={zoom}
            >

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 73.9712,
        lng: -40.7831
    },
    zoom: 6
}
export default Map;