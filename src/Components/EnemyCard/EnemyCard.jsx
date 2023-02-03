import React from 'react'
import './EnemyCard.css'

export default function EnemyCard(props) {
  return (
    <div className="card enemy-card">
    <div className="card-body">
        <h5 className="card-title">Enemy</h5>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item enemy-health-bar">
            {props.playerState.health >= 1 && <div className="health-bar-piece"></div>}
            {props.playerState.health >= 2 && <div className="health-bar-piece"></div>}
            {props.playerState.health >= 3 && <div className="health-bar-piece"></div>}
            {props.playerState.health >= 4 && <div className="health-bar-piece"></div>}
            {props.playerState.health >= 5 && <div className="health-bar-piece"></div>}
        </li>
    
    <li className="list-group-item">Attack Power: 2 </li>
    <li className="list-group-item">Defence Power: 2</li>
    </ul>
</div> 
  )
}
