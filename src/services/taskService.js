import axios from 'axios';

class TaskService {
    static async getTasksByUserId() {
        const jwtToken = localStorage.getItem('jwt');
        try {
            const response = await axios.get('http://localhost:8080/task/by-user-id/' + localStorage.getItem('userId'), {
                headers: {
                    'Authorization': `${jwtToken}`
                }
            });
            return response.data;
        } catch (e) {
            alert("Erro: " + e)
        }
    }

    static async createTask(userId, title, status) {
        const jwtToken = localStorage.getItem('jwt');
        try {
            const response = await axios.post('http://localhost:8080/task', {userId, title, status}, {
                headers: {
                    'Authorization': `${jwtToken}`
                }
            });
            alert("Task criada com id: " + response.id);
            return response.data;
        } catch (e) {
            alert("Erro: " + e)
        }
    }
}

export default TaskService;