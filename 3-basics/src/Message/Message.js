import React from 'react';

function Message (props) {
    return (
        <section onClick={props.click}>
            <h2>{props.text}, { Math.random().toFixed(2) }</h2>
            <div>{props.children}</div>
        </section>
    );
}

export default Message;