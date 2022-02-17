import React from 'react';
import './PlayerInfo.css';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayerInfo = (props) => {
    const {fullName, age, Salary, img, jersey, style} = props.player;
    const handlePlayers = props.handlePlayers;
    return (
        <div className="player-info">
            <div className="player-info-img">
               <img src={img} alt="" />
            </div>
            <h2>{fullName}</h2>
            <h3>Age: {age}</h3>
            <h3>Salary: {Salary}</h3>
            <h3>Style: {style}</h3>
            <h3>Jersey: {jersey}</h3>
            <div className="player-info-img">
              <button onClick={() => handlePlayers(props.player)} className="btn">
              <FontAwesomeIcon icon={faCirclePlus} />
                  Select</button>
            </div>
        </div>
    );
};

export default PlayerInfo;