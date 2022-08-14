import { useState } from 'react';

export function App() {
  const [color, setColor] = useState('indigo');

  chrome.storage.sync.get('color', (storedColor) => {
    setColor(storedColor.color);
  });

  const pickColor = (pickedValue) => {
    setColor(pickedValue);
    chrome.storage.sync.set({ color: pickedValue });
    window.close();
  };

  return (
    <div className='m-4'>
      <select
        onChange={(event) => pickColor(event.target.value)}
        value={color}
        className='block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
      >
        <option>Pick a color</option>
        <option value='indigo'>Indigo</option>
        <option value='pink'>Pink</option>
        <option value='purple'>Purple</option>
        <option value='red'>Red</option>
      </select>
    </div>
  );
}
