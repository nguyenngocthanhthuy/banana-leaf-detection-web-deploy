import React from 'react';
import './DetectionPage.css';
import NavBar from './NavBar';
import { useState } from 'react';
import DETECT from './images/detect.jpg';

const DetectionPage = () => {

  const [imageFile, setImageFile] = useState(null);
  const [modelFile, setModelFile] = useState(null);

  const handleDetectButtonClick = async () => {
    if (imageFile && modelFile) {
      const formData = new FormData();
      formData.append("image_file", imageFile,"image_file");
      formData.append("model_file", modelFile, "model_file");
      console.log(formData);

      try {
        const response = await fetch("/detect/", {
          method: "POST",
          body: formData,
          /*headers: {
            'Access-Control-Allow-Origin': '*',
          }*/
        });
        console.log(response);

        if (!response.ok) {
          throw new Error("An error occurred while detecting objects.");
        }

        const boxes = await response.json();
        drawImageAndBoxes(imageFile, boxes);

      } catch (error) {
        console.error(error.message);
        alert("An error occurred while detecting objects. Please try again later.");
      }
    } else {
      alert("Please select both an image file and a model file.");
    }
  };

  const handleImageFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImageFile(selectedFile);
  };

  const handleModelFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setModelFile(selectedFile);
  };

  const drawImageAndBoxes = (file, boxes) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.querySelector("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      ctx.strokeStyle = "#00FF00";
      ctx.lineWidth = 3;
      ctx.font = "18px serif";
      boxes.forEach(([x1, y1, x2, y2, label]) => {
        ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
        ctx.fillStyle = "#00ff00";
        const width = ctx.measureText(label).width;
        ctx.fillRect(x1, y1, width + 10, 25);
        ctx.fillStyle = "#000000";
        ctx.fillText(label, x1, y1 + 18);
      });
    };
  };


  return (
    <div id='detection-page'>
        <NavBar />

        <div className='detect-intro'>

          <div className='detect-img-div'>
            <img alt='detect' src={DETECT} className='detect-img'></img>
          </div>

          <div className='detect-bar'>
            <div className='form-row'>
              <label className='form-label' htmlFor="imageInput">Upload Image</label>
              <input className='form-input' id="imageInput" type="file" accept="image/*" onChange={handleImageFileChange}/>
            </div>

            <div className='form-row'>
              <label className='form-label' htmlFor="modelInput">Upload Model</label>
              <input className='form-input' id="modelInput" type="file" accept=".pt" onChange={handleModelFileChange}/>
            </div>
            
            <button id="detectButton" onClick={handleDetectButtonClick}>Detect</button>
          </div>
        </div>
  

      <div className="canvas-container">
        <canvas className="custom-canvas"></canvas>
      </div>
          
    </div>
  );
}

export default DetectionPage