export function App() {

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

    return (
        <div className="flex flex-col items-center justify-center w-screen h-auto bg-indigo-400 p-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-2xl px-4 rounded" onClick={createNotification}>Motivate me 🎉</button>
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-2xl px-4 rounded" onClick={stopNotification}>Stop motivating me 😅</button>
        </div>
    );
}