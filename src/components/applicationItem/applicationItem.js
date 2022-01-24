import {useEffect, useState} from 'react';
import AppsData from '../../services/appsData';
import './style.css';
const ApplicationItem = ({item}) => {
    const data = new AppsData();
    const [client, setClient] = useState({})
    useEffect(() => {
        data.getClientById(item.client_id)
            .then(response => setClient(response))
    }, [])
    return (
        <div className="aplication-item" title={client.name}>
            <div>Client: <span className="client-name">{client.name}</span></div>
            <div>Type: {item.type}</div>
            <div>Price: {item.price}</div>
        </div>
    )
}

export default ApplicationItem;