import React from 'react';
import team from '../../images/Team.jpg';
import team1 from '../../images/Team1.jpg';
import team2 from '../../images/Team2.jpg';
import team3 from '../../images/Team3.jpg';
import team4 from '../../images/Team4.jpg';
import team5 from '../../images/Team5.jpg';
import team6 from '../../images/Team6.jpg';
import team7 from '../../images/Team7.jpg';
import team8 from '../../images/Team8.jpg';
import team9 from '../../images/Team9.jpg';
import team10 from '../../images/Team10.jpg';

import './Team.css';

const Team = () => {
    return (
        <div className="team-container">
            <h1>Gallery</h1>
            <img src={team1} alt="" />
            <img src={team3} alt="" />
            <img src={team2} alt="" />
            <img src={team} alt="" />

            <img src={team4} alt="" />
            <img src={team5} alt="" />
            <img src={team6} alt="" />
            <img src={team7} alt="" />

            <img src={team8} alt="" />
            <img src={team9} alt="" />
            <img src={team10} alt="" />

        </div>
    );
};

export default Team;