import React from 'react';

function Documentation(props) {
    return (
        <div>
            <h1>Documentation Component</h1>
            <p>Anthony Sistilli React Tutorial, improving on React</p>
            <p>{props.link}</p>
        </div>
    )
}

export default Documentation; 