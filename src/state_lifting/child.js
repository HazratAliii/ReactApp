import React from 'react';

const Child = (props) => {
    const data = "I am from child"
    props.handlChildData(data)
    return (
        <div>
            <h1>Heading</h1>
            <p> {props.data} </p>
        </div>
    );
}

export default Child;
