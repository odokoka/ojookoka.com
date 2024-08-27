import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useGlitch } from 'react-powerglitch'; // Use the correct export
 // Ensure this is imported if using a separate CSS file

export const Home = () => {
    const glitch = useGlitch();

    return (
        <div className="page-container">
            <div className="left-column">
                <TypeAnimation
                    className='type-animation'
                    sequence={[
                        'HI, IM OJO OKOKA!',
                        1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                />
            </div>
            <div className="right-column">
                <span ref={glitch.ref}>
                    <img 
                        src="images/HeartMBOLogo.png" 
                        alt="OJOOKOKA.COM"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </span>
            </div>
        </div>
    );
};

