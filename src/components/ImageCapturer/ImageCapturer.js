import React, { useState } from 'react';
import Webcam from 'react-webcam';

import './ImageCapturer.css';

import api from '../../api';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user'
};

function ImageCapturer() {
  const webcamRef = React.useRef(null);
  const [nFaces, setNFaces] = useState(0);
  const [clicked, setClicked] = useState(false);

  const captureAndUpload = React.useCallback(() => {
    const base64Image = webcamRef.current.getScreenshot();
    api.postBase64Image(base64Image).then(res => {
      setNFaces(res.data.n_faces);
      setClicked(true);
    });
  }, [webcamRef]);

  return (
    <div className="image-capturer">
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <div>
        {clicked ? `${nFaces} face(s)` : "You haven't submitted a photo"}
      </div>
      <button onClick={captureAndUpload}>Capture photo</button>
    </div>
  );
}

export default ImageCapturer;
