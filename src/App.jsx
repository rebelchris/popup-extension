import Counter from "./Counter";

export function App() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-indigo-400 text-6xl font-bold text-white">
            <p>Welcome 👋</p>
            <br />
            <Counter />
        </div>
    );
}