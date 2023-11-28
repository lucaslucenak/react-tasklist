import React, { useState } from 'react'
import AuthService from '../../services/authService';
import { redirect } from 'react-router-dom';

export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =  (e) => {
    try {
      const response =  AuthService.login(username, password);
      redirect("/");

    } catch (error) {
      console.error('Erro no login: ', error);
    }
  }

  return (
      <section className="vh-100" style={{backgroundColor: "#9A616D;"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: "1rem;"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}}/>
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={() => handleLogin()}>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219;"}}></i>
                          <span className="h1 fw-bold mb-0">Tasklist</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px;"}}>Access your account</h5>

                        <div className="form-outline mb-4">
                          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="form2Example17" className="form-control form-control-lg" />
                          <label className="form-label" for="form2Example17">Username</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form2Example27" className="form-control form-control-lg" />
                          <label className="form-label" for="form2Example27">Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">Sign In</button>
                        </div>

                        {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
                        <p className="mb-5 pb-lg-2" style={{color: "color: #393f81;"}}>Don't have an account? <a href="/signUp"
                          style={{color: "color: #393f81;"}}>Sign up here</a></p>
                        {/* <a href="#!" className="small text-muted">Terms of use.</a> */}
                        {/* <a href="#!" className="small text-muted">Privacy policy</a> */}
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
