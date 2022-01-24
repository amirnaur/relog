export default class AppsData {
    apps_url = "NeRelog_apps.json";
    clients_url = "NeRelog_clients.json";
    getAppsItems = async () => {
        const response = await fetch(this.apps_url)
        if(!response.ok) {
            throw new Error('Server Error');
        }
        const result = await response.json()
        return result;
    }
    
    getAppsClients = async () => {
        const response = await fetch(this.clients_url)
        if(!response.ok) {
            throw new Error('Server Error');
        }
        const result = await response.json()
        return result;
    }

    getClientById = async (id) => {
        const response = await fetch(this.clients_url)
        if(!response.ok) {
            throw new Error('Server Error');
        }
        const result = await response.json();
        return result.filter(client => client.id === id)[0];
    }
}