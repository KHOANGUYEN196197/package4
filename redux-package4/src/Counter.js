import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {

    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const Increment = () => {
        dispatch({ type: 'INCREMENT' })
    }
    const Decrement = () => {
        dispatch({ type: 'DECREMENT' })
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Count: {count}</h1>
            <button onClick={Increment}>Icrement</button><br /><br />
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}
export default Counter;