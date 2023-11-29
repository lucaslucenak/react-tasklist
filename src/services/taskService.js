import axios from 'axios';

class TaskService {
    static async getTasksByUserId() {
        const jwtToken = localStorage.getItem('jwt');
        try {
            try {
                const response = await axios.get('http://localhost:8080/task/by-user-id/' + localStorage.getItem('userId'), {
                    headers: {
                        'Authorization': `${jwtToken}`
                    }
                });
                return response.data;
            } catch(e) {
                alert("Erro: " + e)
            }
        } catch (error) {
            throw error;
        }
    }
}

export default TaskService;