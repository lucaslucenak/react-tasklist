import React, { useState } from 'react'
import TaskService from '../services/taskService';
import { useNavigate } from 'react-router-dom';

export const TasklistInput = () => {
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const createTask = async () => {
        const userId = localStorage.getItem('userId');
        const status = "TO_DO";

        const response = await TaskService.createTask(userId, title, status);
        navigate('/tasklist');
      }

      
    return (
        <div>
            <form className="d-flex justify-content-center align-items-center mb-4">
                <div className="form-outline flex-fill">
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="form3" className="form-control form-control-lg" />
                    <label className="form-label" for="form3">What do you need to do today?</label>
                </div>
                <button type="button" onClick={createTask} className="btn btn-primary btn-lg ms-2">Add</button>
            </form>
        </div>
    )
}
