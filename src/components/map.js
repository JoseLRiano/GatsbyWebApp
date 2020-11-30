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
    }, [])

    return (
        <div className="map">
            {!loading ? <GoogleMapReact 
                bootstrapURLKeys={{ 
                    key: 'YOUR_KEY_HERE'
                }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <LocationMarker lat={center.lat} lng={center.lng} />
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