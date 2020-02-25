import React from 'react';

function Message (props) {
    return (
        <section>
            <h2 onClick={props.click}>{props.text}, { Math.random().toFixed(2) }</h2>

            { props.children ?
                <div>{props.children}</div>
            : null }

            { props.changeTitle ?
                <button onClick={props.changeTitle}>Change Title</button>
            : null }

            { props.delete ?
                <button onClick={props.delete}>Delete Message</button>
            : null }
        </section>
    );
}

export default Message;