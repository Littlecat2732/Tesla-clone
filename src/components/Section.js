import React from 'react';
import './Section.css';

function Section({ bgImg, title, description }) {

    return (
        <div className='Section_Wrap' style={{ backgroundImage: `url("${bgImg}")` }}>
            <div className='Section_ItemText'>
                <h1>{title}</h1>
                {description && <p>{description}</p>}
            </div>
        </div>
    );
};

export default Section;