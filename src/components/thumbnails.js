import React from 'react';

function Thumbnail(props) {
    if (props.src !== 'self' || "") {
        return (
            <img src={props.src} alt={props.alt} />
        )
    } 
    console.log(props.src)
    return (
        ''
    )
}

export default Thumbnail;