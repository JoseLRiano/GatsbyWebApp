import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import LocationMarker from './locationMarker';
import Loader from './loader';
import './map.css';


const Map = ({ center, zoom }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await axios.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
            const { events } = result.data;
            setData(events);
            setLoading(false);
        }
        fetchData()
    }, []);

    const markers = data.map(point => {
        return point.categories[0].id === 10 &&
            <LocationMarker lat={point.geometries[0].coordinates[1]} lng={point.geometries[0].coordinates[0]} />  
    });


    return (
        <div className="map">
            {!loading ? <GoogleMapReact 
                bootstrapURLKeys={{ 
                    key: `${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`
                }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact> : <Loader />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 40.730610,
        lng: -73.935242
    },
    zoom: 8
}
export default Map;