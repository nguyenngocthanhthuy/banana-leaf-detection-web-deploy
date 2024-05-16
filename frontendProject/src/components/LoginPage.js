import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './LoginPage.css';
import NavBar from './NavBar';
import axios from 'axios';
import LOGIN from './images/login.jpg';
import PERSON from './images/person.png';
import PASSWORD from './images/password.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const loginForm = event.currentTarget;
    
    if (loginForm.checkValidity() === false) {
      event.stopPropagation();
    }
    
    setValidated(true);

    const data = {
      username: form.username,
      password: form.password,
    };

    axios.post('/auth/login/', data)
      .then((res) => {
        localStorage.setItem('auth', JSON.stringify({
          access: res.data.access,
          refresh: res.data.refresh,
          user: res.data.user,
        }));
        navigate('/');
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          setError(err.response.data.detail);
        } else {
          setError('An error occurred. Please try again later.');
        }
      });
  };

  return (
    <div id='login-page'>
      <NavBar />
      
      <div className='login-top-part'>
      </div>

      <div className='login-container-part'>
        <div className='login-header-part'>
          <h3 className='login-header'>LOGIN</h3>
          <div className='login-underline'></div>
        </div>

        <div className='login-content-part'>
          <div className='login-img-div'>
            <img alt='' src={LOGIN} className='login-img'></img>
            <div className='login-notice'>
              <p>Don't have an account !</p>
              <Link to='/signup' className='login-link-btn'>Sign Up</Link>
            </div>
          </div> 

          <div className='login-form-div'>
            <form className='login-inputs' onSubmit={handleSubmit}>
              <div className='login-input'>
                <img alt='user' src={PERSON}></img>
                <input
                type='text'
                placeholder='Username' 
                value={form.username || ''}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
              </div>

              <div className='login-input'>
                <img alt='password' src={PASSWORD}></img>
                <input
                type='password'
                placeholder='Password'
                value={form.password || ''}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>

              <div className='login-alert'>
                {error && <p>{error}</p>}
              </div>

              <div className='login-submit-div'>
                <button type='submit' className='login-submit-btn'>Login</button>
              </div>
            </form>
          </div>
          
        </div> 
      
      </div>
    </div>
  );
}

export default LoginPage