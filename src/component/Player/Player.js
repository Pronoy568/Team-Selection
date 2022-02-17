import React, { useEffect, useState } from 'react';
import './Player.css';
import data from '../Data/Data.json';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import Total from '../Total/Total';

const Player = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    

    const handlePlayers = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    }
    useEffect(()=>{
        setPlayers(data); 
    },[])
    return (
        <div className="aside">
            <div className="player">
                {
                    players.map((player)=> <PlayerInfo 
                    handlePlayers = {handlePlayers}
                    player={player} 
                    key={player.id}></PlayerInfo>)
                }
            </div>
            <div className="selected-player">
                <Total cart={cart} key={cart.id}></Total>
            </div>
        </div>
    );
};

export default Player;