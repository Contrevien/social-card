import React from 'react';
import './Description.css';

const description = (props) => {
    return (
        <div className="description">
            <p className="paras"><strong>{props.title}</strong></p>
            <p className="paras">{props.description}</p>
            <a href="https://medium.freecodecamp.org/react-and-firebase-are-all-you-need-to-host-your-web-apps-f7ab55919f53"
                className="display-link">
                medium.freecodecamp.org
            </a>
            <a href="https://medium.freecodecamp.org/react-and-firebase-are-all-you-need-to-host-your-web-apps-f7ab55919f53"
                className="goto">
                <span></span>
            </a>
        </div>
    )
}

export default description;