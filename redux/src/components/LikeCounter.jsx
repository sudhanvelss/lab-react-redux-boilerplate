import React,{useState} from "react";
import {createStore} from "redux";
import IncrementNumber, {DecrementNumber} from "./Action";
import reducer from './Reducer';

const store = createStore(reducer)

export default function LikeCounter(){
    const [count, setCounter] = useState(0)

    const unsubcribe = store.subscribe(() => {
        setCounter(store.getState().count)
    })

    return(
        <div className="Redux">
            <h2>{count}</h2>
            <button onClick={() => store.dispatch(IncrementNumber())}>Like</button>
            <button onClick={() => store.dispatch(DecrementNumber())}>Unlike</button>
        </div>
    )
    
}