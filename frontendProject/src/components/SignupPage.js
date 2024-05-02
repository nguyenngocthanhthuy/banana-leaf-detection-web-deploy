import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css';
import NavBar from './NavBar';
import axios from 'axios';
import LOGIN from './images/login.jpg';
import PERSON from './images/person.png';
import PASSWORD from './images/password.png';
import EMAIL from './images/email.png';

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: form.username,
      email: form.email,
      password: form.password,
    };

    axios.post('/auth/register/', data)
      .then((res) => {
        localStorage.setItem('auth', JSON.stringify({
          access: res.data.access,
          refresh: res.data.refresh,
          user: res.data.user,
        }));
        navigate('/login');
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
    <div id='signup-page'>
      <NavBar />
      <div className='signup-top-part'></div>
      <div className='signup-container-part'>
        <div className='signup-header-part'>
          <h3 className='signup-header'>SIGN UP</h3>
          <div className='signup-underline'></div>
        </div>
        <div className='signup-content-part'>
          <div className='signup-img-div'>
            <img alt='' src={LOGIN} className='signup-img'></img>
            <div className='signup-notice'>
              <p>Already have an account!</p>
              <Link to='/login' className='signup-link-btn'>Login</Link>
            </div>
          </div>
          <div className='signup-form-div'>
            <form className='signup-inputs' onSubmit={handleSubmit}>
              <div className='signup-input'>
                <img alt='user' src={PERSON}></img>
                <input
                  type='text'
                  placeholder='Username'
                  value={form.username || ''}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
              </div>
              <div className='signup-input'>
                <img alt='mail' src={EMAIL}></img>
                <input
                  type='email'
                  placeholder='Email'
                  value={form.email || ''}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className='signup-input'>
                <img alt='password' src={PASSWORD}></img>
                <input
                  type='password'
                  minLength='8'
                  placeholder='Password'
                  value={form.password || ''}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>

              <div className='signup-alert'>
                {error && <p>{error}</p>}
              </div>

              <div className='signup-submit-div'>
                <button type='submit' className='signup-submit-btn'>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
