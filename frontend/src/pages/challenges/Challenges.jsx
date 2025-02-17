import React from 'react';
import "./Challenges.css";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="grid">
            <div className="challenge-box" onClick={() => handleNavigation('/create-exam')}>
                Push Ups
            </div>
            <div className="challenge-box" onClick={() => handleNavigation('/views')}>
                Sit Ups
            </div>
            <div className="challenge-box" onClick={() => handleNavigation('/hands-excercise')}>
               hands Up Down
            </div>
            <div className="challenge-box" onClick={() => handleNavigation('/settings')}>
                Jumping
            </div>
        </div>
    );
}

export default Home;
