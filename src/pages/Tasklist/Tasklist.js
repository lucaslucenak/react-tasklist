import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TasklistInput } from '../../components/TasklistInput'
import { TasklistItem } from '../../components/TasklistItem'

export const Tasklist = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#e2d5de;" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '15px' }}>
              <button className="btn btn-outline-secondary" >Sair</button>
              <div className="card-body p-5">
                <h6 className="mb-3">Simple Tasklist</h6>
                <TasklistInput />

                <ul className="list-group mb-0">
                  <TasklistItem />
                  <TasklistItem />
                  <TasklistItem />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}