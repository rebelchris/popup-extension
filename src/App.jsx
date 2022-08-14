import { useState } from 'react';

const colorMatch = {
  indigo: 'bg-indigo-400',
  pink: 'bg-pink-400',
  purple: 'bg-purple-400',
  red: 'bg-red-400',
};

export function App() {
  const [color, setColor] = useState('indigo');

  const createNotification = () => {
    chrome.alarms.create('motivation_alarm', {
      periodInMinutes: 60,
    });
    window.close();
  };

  const stopNotification = () => {
    chrome.alarms.clearAll();
    window.close();
  };

  chrome.storage.sync.get('color', (storedColor) => {
    setColor(storedColor.color);
  });

  return (
    <div
      className={`flex flex-col items-center justify-center w-screen h-auto ${colorMatch[color]} p-4`}
    >
      <button
        className='px-4 py-2 text-2xl font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        onClick={createNotification}
      >
        Motivate me 🎉
      </button>
      <br />
      <button
        className='px-4 py-2 text-2xl font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        onClick={stopNotification}
      >
        Stop motivating me 😅
      </button>
    </div>
  );
}
