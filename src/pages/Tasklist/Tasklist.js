import { TasklistInput } from '../../components/TasklistInput'
import { TasklistItem } from '../../components/TasklistItem'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TaskService from '../../services/taskService';
import axios from 'axios';

export const Tasklist = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    localStorage.clear();
    navigate('/');
  }

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwt');
    try {
      axios.get('http://localhost:8080/task/by-user-id/' + localStorage.getItem('userId'), {
        headers: {
          'Authorization': `${jwtToken}`
        }
      }).then(res => {setTasks(res.data.reverse())});
    } catch (e) {
      alert("Erro: " + e)
    }
  }, []);

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
