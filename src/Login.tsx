import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import demo from "./demo.png";

function Login() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="row flex-grow-1 w-100">
        <div className="col-md-6 d-flex justify-content-center align-items-center bg-white">
          <div className="p-4 w-100" style={{ maxWidth: '400px' }}>
            <h2 className="text-left mb-3">Sign In</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.
            </p>
            <form>
              <div className="form-group mb-3">
                <input type="text" className="form-control" placeholder="Username" />
              </div>
              <div className="form-group mb-3">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe" className="ms-2">Remember me</label>
                </div>
                <a href="/forgot-password" className="text-dark">Forgot Password?</a>
              </div>
              <button type="submit" className="btn btn-primary w-100">Log In</button>
            </form>
            <div className="text-center my-3"><p>— or —</p></div>
            <div>
              <button className="btn btn-primary w-100 mb-2">
                <FontAwesomeIcon icon={['fab', 'facebook']} /> Login with Facebook
                {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> Login with Facebook */}
              </button>
              <button className="btn btn-info w-100 mb-2">
                <FontAwesomeIcon icon={['fab', 'twitter']} /> Login with Twitter
              </button>
              <button className="btn btn-danger w-100">
                <FontAwesomeIcon icon={['fab', 'google']} /> Login with Google
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <div className="h-100" style={{
            backgroundImage: `url(${demo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
