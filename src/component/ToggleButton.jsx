import React from 'react';

const ToggleButton = ({ toggleindex , indexcolor}) => {

    return (
        <div className='card-end'>
            <button onClick={toggleindex} className = "buttonIcon" style={{background: indexcolor}}>
                <i className="fa-solid fa-angle-right "></i>
            </button>
        </div>
    );
};

export default ToggleButton;