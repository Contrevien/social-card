import React from 'react';
import './Cover.css';
import cover_image from '../../assets/react-firebase.png';
import profile_image from '../../assets/person.jpg';

const cover = (props) => {
    return (
        <div className="cover">
            <img src={cover_image} alt="Something's Wrong" />
            <div className="writer">
                <div className="name">
                    <span>{props.writer}</span>
                </div>
                <img src={profile_image} alt="Person" />
                <a href="https://linkedin.com/in/contrvien"
                    className="goto-profile">
                    <span></span>
                </a>
            </div>
        </div>
    )
}

export default cover;