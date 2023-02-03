import React from 'react'
import './Stats.css'

export default function Stats(props) {
    if (props.playerState.sword === true && props.playerState.swordBuff !== true) {
        props.playerState.attack += 3;
        props.playerState.swordBuff = true;
    }
    if ( props.playerState.sword === false && props.playerState.swordNerf !== true) {
         props.playerState.attack -= 3;
         props.playerState.swordNerf = true;
    }
    if ( props.playerState.shield === true && props.playerState.shieldBuff !== true) {
         props.playerState.defence += 3
         props.playerState.shieldBuff = true;
    }
    if ( props.playerState.shield === false && props.playerState.shieldNerf !== true) {
         props.playerState.defence -= 3;
         props.playerState.shieldNerf = true;
    }
  return (
    <div className="card stats">
        <div className="card-body">
            <h5 className="card-title">Stats</h5>
        </div>
        <ul className="list-group list-group-flush">
            <li id="health-bar" className="list-group-item">
                {props.playerState.health >= 1 && <div className="health-bar-piece"></div>}
                {props.playerState.health >= 2 && <div className="health-bar-piece"></div>}
                {props.playerState.health >= 3 && <div className="health-bar-piece"></div>}
                {props.playerState.health >= 4 && <div className="health-bar-piece"></div>}
                {props.playerState.health >= 5 && <div className="health-bar-piece"></div>}
                {props.playerState.health >= 6 && <div className="health-bar-piece"></div>}
                {props.playerState.health >= 7 && <div className="health-bar-piece"></div>}
                {props.playerState.health >= 8 && <div className="health-bar-piece"></div>}
                {props.playerState.health >= 9 && <div className="health-bar-piece"></div>}
                {props.playerState.health >= 10 && <div className="health-bar-piece"></div>}
            </li>
            <li id="health-bar" className="list-group-item">
                {props.playerState.energy >= 1 && <div className="energy-bar-piece"></div>}
                {props.playerState.energy >= 2 && <div className="energy-bar-piece"></div>}
                {props.playerState.energy >= 3 && <div className="energy-bar-piece"></div>}
                {props.playerState.energy >= 4 && <div className="energy-bar-piece"></div>}
                {props.playerState.energy >= 5 && <div className="energy-bar-piece"></div>}
            </li>
        
        <li className="list-group-item">Attack Power: {props.playerState.attack} </li>
        <li className="list-group-item">Defence Power: {props.playerState.defence}</li>
        </ul>
    </div> 
  )
}
