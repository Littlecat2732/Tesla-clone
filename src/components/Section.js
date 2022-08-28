import React from 'react';
import './Section.css';

function Section({ bgImg, title, description, rightButton, leftButton }) {

    function reveal() {
        var reveals = document.querySelectorAll(".Section_Reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

    return (
        <div className='Section_Wrap' style={{ backgroundImage: `url("${bgImg}")` }}>
            <div className='Section_Reveal'>
                <div className='Section_ItemText'>
                    <h1>{title}</h1>
                    {description && <p>{description}</p>}
                </div>
                <div className='Section_ButtonGroup' >
                    <div className='Section_LeftButton Section_Button'>
                        {leftButton}
                    </div>
                    {rightButton &&
                        <div className='Section_RightButton Section_Button'>
                            {rightButton}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Section;