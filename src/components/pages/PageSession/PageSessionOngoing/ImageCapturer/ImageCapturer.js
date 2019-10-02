import React, { useEffect } from 'react';
import Webcam from 'react-webcam';

import api from '../../../../../api';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user'
};

function ImageCapturer() {
  const webcamRef = React.useRef(null);

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      const base64Image = webcamRef.current.getScreenshot();
      api.postBase64Image(base64Image);
    }, 10000);
    return () => clearInterval(intervalHandle);
  });

  return (
    <Webcam
      className="image-capturer"
      audio={false}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      videoConstraints={videoConstraints}
    />
  );
}

export default ImageCapturer;
