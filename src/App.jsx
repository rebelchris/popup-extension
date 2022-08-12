import {useState} from "react";

const colorMatch = {
    indigo: 'bg-indigo-400',
    pink: 'bg-pink-400',
    purple: 'bg-purple-400'
}

export function App() {
    const [color, setColor] = useState('indigo');

    const createNotification = () => {
        chrome.alarms.create('motivation_alarm', {
            periodInMinutes: 60,
        });
        window.close();
    }

    const stopNotification = () => {
        chrome.alarms.clearAll();
        window.close();
    }

    chrome.storage.sync.get('color', (storedColor) => {
        setColor(storedColor.color)
    })

    const pickColor = (pickedValue) => {
        setColor(pickedValue);
        chrome.storage.sync.set({color: pickedValue});
    }

    return (
        <div className={`flex flex-col items-center justify-center w-screen h-auto ${colorMatch[color]} p-4`}>
            <select onChange={(event) => pickColor(event.target.value)} value={color} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option>Pick a color</option>
                <option value='indigo'>Indigo</option>
                <option value='pink'>Pink</option>
                <option value='purple'>Purple</option>
            </select>
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-2xl px-4 rounded" onClick={createNotification}>Motivate me 🎉</button>
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-2xl px-4 rounded" onClick={stopNotification}>Stop motivating me 😅</button>
        </div>
    );
}