import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/userService';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const role = "ADMIN";
      const response = await UserService.createUser(username, password, email, role);
      alert("Usuário criado com username: " + response.username);
      navigate('/');
    } catch (e) {
      alert("Erro ao logar: STATUS ", e.status)
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

                  <form onSubmit={handleSubmit}>

                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219;"}}></i>
                      <span className="h1 fw-bold mb-0">Tasklist</span>
                    </div>

                    <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px;"}}>Create a new account</h5>

                    <div className="form-outline mb-4">
                      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="formUsername" className="form-control form-control-lg" />
                      <label classNameName="form-label" for="formUsername">Username</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="formEmail" className="form-control form-control-lg" />
                      <label classNameName="form-label" for="formEmail">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="formPassword" className="form-control form-control-lg" />
                      <label classNameName="form-label" for="formPassword">Password</label>
                    </div>

                    <div className="pt-1 mb-4">
                      <button className="btn btn-dark btn-lg btn-block" type="submit">Sign Up</button>
                    </div>

                    {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
                    <p className="mb-5 pb-lg-2" style={{color: "color: #393f81;"}}>Already have an account? <a href="/signIn"
                      style={{color: "color: #393f81;"}}>Sign in here</a></p>
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
