import React, {useEffect} from 'react';
import ApplicationsList from '../applicationsList';
import Map from '../map';
import AppsData from '../../services/appsData';

const App = () => {
    const data = new AppsData();
    useEffect(() => {
        data.getAppsItems()
            .then((response) => console.log(response));
    }, [])
    return (
        <>
            <ApplicationsList />
            <Map />
        </>
    )
}

export default App;