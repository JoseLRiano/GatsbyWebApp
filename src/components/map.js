import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import LocationMarker from './locationMarker';
import Loader from './loader';
import Info from './Info';
import './map.css';


const Map = ({ center, zoom }) => {

    const [info, setInfo] = useState(null);
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

    const markers = data.map((point, ind) => {
        // if(point.categories[0].id === 10) {
            // point.geometries.map((geo, index) => { 
            //     console.log(geo);
            //     return <LocationMarker 
            //         key={index} 
            //         lat={geo.coordinates[1]} 
            //         lng={geo.coordinates[0]} 
            //         icon="stormIcon" 
            //         onClick={() => setInfo({ title: point.title, date: geo.date})} 
            //     />})
        // }
        // else 
        if (point.categories[0].id === 8){
            return <LocationMarker 
                key={ind} 
                lat={point.geometries[0].coordinates[1]} 
                lng={point.geometries[0].coordinates[0]} 
                icon="fireIcon"
                onClick={() => setInfo({ title: point.title, date: point.geometries[0].date})}
            />
        }
            // else if(point.categories[0].id === 12){
            //     console.log(point)
            // return <LocationMarker 
            //     key={ind}
            //     lat={point.geometries[0].coordinates[1]} 
            //     lng={point.geometries[0].coordinates[0]} 
            //     icon="summitIcon"/>
        // }
        return null
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
            {info && <Info info={info} />}
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