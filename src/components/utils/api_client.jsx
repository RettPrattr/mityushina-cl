import axios from 'axios';

export class ApiClient {
    async getLayoutData () {
        try {
            const { data } = await axios.get('http://localhost:1337/api/layout?populate=deep').then(result => result.data)  
            return data;
        } catch (e) {
            return e
        }
    }
}


