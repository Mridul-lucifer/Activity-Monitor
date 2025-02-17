import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
// Add TensorFlow.js and PoseNet imports
import * as posenet from '@tensorflow-models/posenet';
import '@tensorflow/tfjs';
import {useNavigate} from 'react-router-dom'
const HandsUpExercise = () => {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState('down');
  const videoRef = useRef(null);

  useEffect(() => {
    // Load the PoseNet model
    const loadPoseNet = async () => {
      const net = await posenet.load();
      return net;
    };

    // Set up webcam
    const setupWebcam = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    // Detect pose in video
    const detectPose = async (net) => {
      const estimatePose = async () => {
        // Estimate pose from video frame
        const pose = await net.estimateSinglePose(videoRef.current, {
          flipHorizontal: true,
        });

        if (pose.keypoints) {
          const wristLeft = pose.keypoints.find(k => k.part === 'leftWrist');
          const wristRight = pose.keypoints.find(k => k.part === 'rightWrist');
          const shoulderLeft = pose.keypoints.find(k => k.part === 'leftShoulder');
          const shoulderRight = pose.keypoints.find(k => k.part === 'rightShoulder');

          if (wristLeft && wristRight && shoulderLeft && shoulderRight) {
            const wristLeftY = wristLeft.position.y;
            const wristRightY = wristRight.position.y;
            const shoulderLeftY = shoulderLeft.position.y;
            const shoulderRightY = shoulderRight.position.y;

            // console.log("Left Wrist Y:", wristLeftY, "Right Wrist Y:", wristRightY);
            // console.log("Left Shoulder Y:", shoulderLeftY, "Right Shoulder Y:", shoulderRightY);

            // Check for "down" position (wrist is lower than the shoulder)
            if (wristLeftY > shoulderLeftY && wristRightY > shoulderRightY) {
              if (position === 'up') {
                setPosition('down');
                setCount(prevCount => prevCount + 1);
              }
            }

            // Check for "up" position (wrist is higher than the shoulder)
            else if (wristLeftY < shoulderLeftY && wristRightY < shoulderRightY ) {
              if (position === 'down') {
                setPosition('up');
              }
            }
          }
        }

        requestAnimationFrame(estimatePose);
      };

      estimatePose();
    };

    const init = async () => {
      await setupWebcam();
      const net = await loadPoseNet();
      detectPose(net);
    };

    init();

  }, [position]);

  const navigate = useNavigate();
  const submithands = async (e) =>{
    e.preventDefault();
    let val = count*0.5;
    const response = await axios.post('http://localhost:5000/activity',{
        Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2N2IyYjBiOTM1MGI5ZTVhY2VkM2I2ZTEiLCJpYXQiOjE3Mzk3Nzk3NDgsImV4cCI6MTczOTc4MzM0OH0.UmMLPA_uSUsKfaU2cJjFmPlLRWV-hdXC1WuGMpS3VV4",
        Calories : val
    })
    alert(response.data.msg);
    navigate('/');
  }
 
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black text-center">
      <h1 className="text-2xl font-bold fixed bg-amber-600 top-0 left-20 z-4 p-2 rounded-b-2xl  border-b-2 border-r-2 border-red-800">Challenge - Hands up, down!</h1>
      <video
        className="w-screen h-screen border-amber-400 z-1"
        ref={videoRef}
        autoPlay
        style={{ transform: 'scaleX(-1)' }} // Mirror video for easier interaction
      />
      <div className="fixed bg-cyan-900 bottom-0 right-20 text-center rounded-t-2xl z-4">
        <h1 className="text-2xl font-bold p-2">Arms-ups: <span className="bg-gray-500 pr-2 pl-2 rounded-xl">{count}</span></h1>
      <div className="w-full grid grid-cols-2 ">
        <button className='bg-green-500 font-bold' onClick={submithands}>Submit</button>
        <button className='bg-red-500 font-bold' onClick={submithands}>Cancel</button>
      </div>
      </div>
    </div>
  );
};

export default HandsUpExercise;
