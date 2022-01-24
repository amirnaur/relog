import ApplicationItem from '../applicationItem';
import { FixedSizeList as List } from "react-window";
import AppsData from '../../services/appsData';

const ApplicationsList = ({applications}) => {
    const data = new AppsData();
    const Row = ({ index, style }) => (
        <div style={style}>
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
        itemSize={60}
        width={300}>
            {/* {applications.map((item) => {
                return (
                    <ApplicationItem key={item.id} item={item}/>
                )
            })} */}
            {Row}
        </List>
        
    )
}

export default ApplicationsList;