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
            <div className="client-name"><span className="client-name-title">{client.name}</span></div>
            <div className="type-price-container">
                <div className={`application-type ${item.type}`}>{item.type}</div>
                <div className="application-price">Price: <span>{item.price}</span></div>
            </div>
            
        </div>
    )
}

export default ApplicationItem;