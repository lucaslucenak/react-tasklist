import { TasklistInput } from '../../components/TasklistInput'
import { TasklistItem } from '../../components/TasklistItem'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TaskService from '../../services/taskService';

export const Tasklist = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/');
  }

  const fetchTasks = async () => {
    const response = await TaskService.getTasksByUserId();
    setTasks(response);
    console.log(tasks);
  }

  useEffect(() => {
    fetchTasks();
  });

  return (
    <section className="vh-100" style={{ backgroundColor: "#e2d5de;" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '15px' }}>
              <button className="btn btn-outline-danger" onClick={handleLogout}>Sair</button>
              <div className="card-body p-5">
                <h6 className="mb-3">Simple Tasklist</h6>
                <TasklistInput />

                <ul className="list-group mb-0">
                  {tasks.map(function (task) {
                    return (
                      <TasklistItem id={task.id} title={task.title} status={task.status} createdAt={task.createdAt} updatedAt={task.updatedAt} />
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
