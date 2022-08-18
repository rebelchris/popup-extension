import {useState} from 'react';

const colorMatch = {
    indigo: 'bg-indigo-400',
    pink: 'bg-pink-400',
    purple: 'bg-purple-400',
    red: 'bg-red-400',
};

export function App() {
    const [color, setColor] = useState('indigo');
    const [message, setMessage] = useState(null);

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


    const spoofImages = () => {
        const images = document.getElementsByTagName('img');
        for(const image of images) {
            image.removeAttribute('srcset');
            image.src = 'http://placekitten.com/300'
        }
    }

    const imageSpoof = async () => {
        const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: spoofImages
        });
    }

    return (
        <div
            className={`flex flex-col items-center justify-center w-screen h-auto ${colorMatch[color]} p-4`}
        >
            {message && (<><p className='text-white'>{message}</p><br/></>)}
            <button
                className='px-4 py-2 text-2xl font-bold text-white bg-pink-500 rounded hover:bg-pink-700'
                onClick={imageSpoof}
            >
                Change images
            </button>
            <br/>
            <button
                className='px-4 py-2 text-2xl font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
                onClick={createNotification}
            >
                Motivate me 🎉
            </button>
            <br/>
            <button
                className='px-4 py-2 text-2xl font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
                onClick={stopNotification}
            >
                Stop motivating me 😅
            </button>
        </div>
    );
}
