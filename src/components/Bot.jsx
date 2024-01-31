import React, { useState, useEffect } from 'react';
import '../css/Bot.css';

const Bot = ({ position }) => {
    const [showCircle, setShowCircle] = useState(false);
    const [showBox, setShowBox] = useState(false);
    const [visible, setvisible] = useState(true);



    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowCircle(true);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    const cancelCircle = () => {
        setShowCircle(false);
    };
    const cancelBox = () => {
        setShowBox(!showBox);
        setvisible(true)
    };
    const toggleBox = () => {
        setShowBox(!showBox);
        setvisible(false)
    };

    return (
        <>
            <div className={`bot ${showCircle ? 'show' : ''} ${position === 'exchange' ? 'exchange' : ''} ${position === 'coins' ? 'coins' : ''} ${showBox ? 'box' : ''}`}>
                <>
                    {
                        visible && (
                            <>
                                <h1 onClick={cancelCircle}>X</h1>
                                <div>
                                    <img onClick={toggleBox} width="94" height="94" src="https://img.icons8.com/3d-fluency/94/chatbot.png" alt="chatbot" />
                                </div>
                            </>
                        )
                    }
                    {showBox && (
                        <>

                            <div className="box-container">
                                <div className='box-container-1'>
                                    <h2 onClick={cancelBox}>X</h2>
                                    <img onClick={toggleBox} width="94" height="94" src="https://img.icons8.com/3d-fluency/94/chatbot.png" alt="chatbot" />
                                    <h1>COGNIBOT</h1>
                                </div>
                                <h3>Hello there! I'm CogniBot, your friendly AI chatbot. Need assistance with cryptocurrency prices or information? Feel free to ask me anything related to the world of cryptocurrencies, and I'll do my best to provide you with accurate and helpful information. </h3>
                                <h2>Let's dive into the world of crypto together!</h2>
                                <a href='https://ai-chatbot-inky-sigma.vercel.app/'>Click Here</a>
                            </div>
                        </>
                    )}
                </>
            </div>





        </>
    );
};

export default Bot;
