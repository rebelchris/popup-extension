import {useState} from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const increase = () => setCounter(count => count + 1)
    const decrease = () => setCounter(count => count - 1)
    return (
        <div>
            <button onClick={decrease}>-</button>
            <span className='px-4'>{counter}</span>
            <button onClick={increase}>+</button>
        </div>
    )
}