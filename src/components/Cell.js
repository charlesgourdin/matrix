import React from 'react';

const Cell = (props) => {

    return (
        <div>
            <p style={{
                color: `${props.color}`,
                opacity: `${props.opacity}`,
                transition: (props.color==='chartreuse') ? '0s' : `${Math.floor(Math.random() * (5 - 2 + 1)) + 2}s`
            }}>{props.character}</p>
        </div>
    )
}

export default Cell