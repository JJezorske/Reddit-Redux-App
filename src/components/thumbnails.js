import React from 'react';

function Thumbnail(props) {
    if (props.src !== 'self') {
        return (
            <img src={props.src} alt={props.alt} />
        )
    } 
    return (
        ''
    )
}

export default Thumbnail;