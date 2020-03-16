import React from 'react';

function Input (props) {
    return (
        <input onChange={props.input} value={props.val} type="text"/>
    );
}

export default Input;