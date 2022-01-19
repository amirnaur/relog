export default class AppsData {
    url = "NeRelog_apps.json";

    getAppsItems = async () => {
        const response = await fetch(this.url)
        if(!response.ok) {
            throw new Error('Server Error');
        }
        const result = await response.json()
        return result;
    }
}