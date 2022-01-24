import {MapContainer, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import './style.css';
const Map = ({applications}) => {
    const Almaty = [43.238949, 76.889709];
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
                        onMouseOver={(e) => {
                            e.target.openPopup();
                        }}
                        onMouseOut={(e) => {
                            e.target.closePopup();
                        }}>
                        
                        <Tooltip>{application.id} {application.coords.lat, application.coords.long}</Tooltip>

                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    )
}


export default Map;