import React, { useState, useEffect } from 'react';

const Interval = () => {
  const [intervalTimes, setIntervalTimes] = useState([]);
  const [currentTime, setCurrentTime] = useState('');

  const recordInterval = () => {
    const currentTime = Date.now();
    setIntervalTimes(prevTimes => [...prevTimes, currentTime]);
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}.${milliseconds}`);
    };

    const intervalId = setInterval(updateCurrentTime, 100);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <button onClick={recordInterval} style={{ fontSize: '36px' }}>
        Interval time
      </button>
      <div>
        <h2>Interval Times:</h2>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {intervalTimes.map((time, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{formatTime(time)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const formatTime = (epochTime) => {
  const date = new Date(epochTime);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const milliseconds = date.getMilliseconds().toString().padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
};

export default Interval;
