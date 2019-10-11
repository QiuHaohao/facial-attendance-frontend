import PropTypes from 'prop-types';
import React, { useEffect, useMemo } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user'
};

function ImageCapturer(props) {
  const webcamRef = React.useRef(null);

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      const base64Image = webcamRef.current.getScreenshot();
      props.onPostImage(base64Image);
    }, 1000);
    return () => clearInterval(intervalHandle);
  });

  return useMemo(
    () => (
      <Webcam
        className="image-capturer"
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
    ),
    []
  );
}

ImageCapturer.propTypes = {
  onPostImage: PropTypes.func.isRequired
};

export default ImageCapturer;
