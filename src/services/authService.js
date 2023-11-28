import axios from 'axios';

class AuthService {
    static async login(username, password) {
        try {
            const response = await axios.post('http://localhost:8080/authentication/login', {username, password});
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static saveToken(token) {
        localStorage.setItem('token', token);
    }

    static getToken() {
        return localStorage.getItem('token');
    }
}

export default AuthService;