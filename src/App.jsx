export function App() {

    const createNotification = () => {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icons/icon-48.png',
            title: 'Hi there 👋',
            message: 'Just a reminder that you rock!',
            buttons: [
                { title: 'I know ☺️'}
            ],
            priority: 0
        });
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen h-auto bg-indigo-400 p-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-2xl px-4 rounded" onClick={createNotification}>Surprise me 🎉</button>
        </div>
    );
}