import React, {useState} from "react";
import "./Clicker.css"

const Clicker = (props) => {

    const [currentCount, setCurrentCount] = useState(0);

    const DecrementCount = () => {
        setCurrentCount(currentCount - 1);
    }

    const IncrementCount = () => {
        setCurrentCount(currentCount + 1)
    }

    return(
        <div>
            <button onClick={DecrementCount}>-</button>
            <span>{currentCount}</span>
            <button onClick={IncrementCount}>+</button>
        </div>
    );
}

export default Clicker;