import React, {useState} from 'react';

const Inex1 = () => {

    const [count, incrementFunction] = useState(0);
    const handleIncrement = () => {
       if (count <= 4) 
            incrementFunction(count + 1)
    }

    const handleDecrement = () => {
        incrementFunction(count - 1)
    }
    return (
        <div>
            <h1>Count : {count}</h1>            
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default Inex1;
