import axios from 'axios';

class UserService {
    static async createUser(username, password, email, role) {
        try {
            console.log({username, password, email, role})
            const response = await axios.post('http://localhost:8080/user', {username, password, email, role});
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;