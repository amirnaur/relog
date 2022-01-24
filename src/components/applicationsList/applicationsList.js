import ApplicationItem from '../applicationItem';
import { FixedSizeList as List } from "react-window";
import AppsData from '../../services/appsData';
import './style.css';
const ApplicationsList = ({applications}) => {
    const data = new AppsData();
    const Row = ({ index, style }) => (
        <div style={style} className="application-item-container">
            <ApplicationItem 
                item={applications[index]}
            />
        </div>
      );

    return (
        <List
        className="apps-list"
        height={500}
        itemCount={applications.length}
        itemSize={75}
        width={300}>
            
            {Row}
        </List>
        
    )
}

export default ApplicationsList;