import React, {useEffect, useState} from 'react';
import ApplicationsList from '../applicationsList';
import Map from '../map';
import AppsData from '../../services/appsData';
import './style.css';
const App = () => {
    const data = new AppsData();
    const [applications, setApplications] = useState([])
    useEffect(() => {
        data.getAppsItems()
            .then((response) => setApplications(response));
    }, []);
    return (
        <div className="app-container">
            <ApplicationsList applications={applications}/>
            <Map applications={applications}/>
        </div>
    )
}

export default App;