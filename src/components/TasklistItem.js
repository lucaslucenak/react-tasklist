import React from 'react'
import TaskService from '../services/taskService';

export const TasklistItem = (props) => {

    const handleOnCheck = async (e) => {
        const response = await TaskService.deleteTask(props.id);
        window.location.reload(false);
    }

    return (
        <div>
            <li
                className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div className="d-flex align-items-center">
                    <input className="form-check-input me-2" type="checkbox" onChange={handleOnCheck} value="" aria-label="..." />
                    {props.title}
                </div>
                <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                    <i className="fas fa-times text-primary"></i>
                </a>
            </li>
        </div>
    )
}
