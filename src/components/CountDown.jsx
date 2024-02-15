import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const [time, setTime] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
   <>
   <div className='bg-amber-300 pt-4 text-white text-2xl text-center box'>
    <h1 className='xl:text-5xl text-gray-700 font-semibold'>Time is running out.</h1>
    <h1 className='xl:text-5xl text-gray-700 font-semibold'>Grab your spot fast</h1>
    <h1 className=' xl:text-8xl'>{formatTime(time)}</h1>
    <button className=" bg-green-600 xl:w-80 xl:h-20 xl:text-xl font-semibold rounded-xl  xl:mb-8">Register Now at 499 <span className=" line-through">1999</span></button>
    </div>
    
   </>
  )
}

export default CountDown