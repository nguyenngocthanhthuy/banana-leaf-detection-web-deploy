import React from 'react';
import './SettingsPage.css';
import NavBar from './NavBar';
import UPLOADPIC from './images/upload-pic.jpg';

const SettingsPage = () => {
  return (
    <div id='settings-page'>
      <NavBar />

      <div className='settings-top-part'>

      </div>

      <div className='settings-container-part'>
        <div className='settings-header-part'>
          <h3 className='settings-header'>SETTINGS</h3>
          <p className='settings-header'>Edit your profile</p>
        </div>

        <div className='settings-content-part'>
          <div className='settings-form-div'>
            <div className='settings-input'>
              <label className='settings-label'>Username</label>
              <input className='settings-form-input' type="text" />
            </div>
            <div className='settings-input'>
              <label className='settings-label'>Password</label>
              <input className='settings-form-input' type="text" />
              <p className='change'>Change</p>
            </div>
            <div className='settings-input'>
              <label className='settings-label'>Email Address</label>
              <input className='settings-form-input' type="text" />
              <p className='change'>Change</p>
            </div>
            <p className='deleteAcc'>Delete your account</p>
            <div className='settings-btn-div'>
              <button className='settings-btn'>CANCEL</button>
              <button className='settings-btn'>SAVE</button>
            </div>
          </div>

          <div className='upload-div'>
            <div className='upload-pic-div'>
              <img alt='upload-pic' src={UPLOADPIC} className='upload-pic'></img> 
            </div>
            <div className='upload-btn-div'>
              <button className='upload-btn'>Upload a picture</button>
            </div>
          </div>
        </div> 
      </div>
        
    </div>
  );
}

export default SettingsPage