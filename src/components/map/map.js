import {useEffect, useState} from 'react';
import AppsData from '../../services/appsData';
import {MapContainer, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import './style.css';
const Map = ({applications}) => {
    const Almaty = [43.238949, 76.889709];
    const data = new AppsData();
    const [clients, setClients] = useState([])
    useEffect(() => {
        data.getAppsClients()
            .then(response => setClients(response))
    }, [])
    return (
        <MapContainer center={Almaty} zoom={13} scrollWheelZoom={false} preferCanvas={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
                {applications.map(application => (
                    
                    <Marker
                        key={application.id}
                        position={[application.coords.lat, application.coords.long]}
                    >
                        
                        <Tooltip>
                            Client: {clients.filter(client => client.id === application.client_id)[0].name}<br/>
                            ID: {application.id}<br/>
                            Price: {application.price}
                        </Tooltip>

                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    )
}


export default Map;