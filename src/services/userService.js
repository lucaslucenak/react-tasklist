import axios from 'axios';

class UserService {
    static async createUser(username, password, email, role) {
        try {
            console.log({username, password, email, role})
            try {
                const response = await axios.post('http://localhost:8080/user', {username, password, email, role});
                alert("Usuário criado com username: " + response.username);
                return response.data;
            } catch(e) {
                alert("Erro: " + e.response.data.errors.status)
            }
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;