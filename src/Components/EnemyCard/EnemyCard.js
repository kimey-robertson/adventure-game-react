import React from 'react'
import './EnemyCard.css'

export default function EnemyCard(props) {
  return (
    <div className="card enemy-card">
    <div className="card-body">
        <h5 className="card-title">{JSON.stringify(props.enemyState)}</h5>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item enemy-health-bar">
            {props.enemyState.health >= 1 && <div className="health-bar-piece"></div>}
            {props.enemyState.health >= 2 && <div className="health-bar-piece"></div>}
            {props.enemyState.health >= 3 && <div className="health-bar-piece"></div>}
            {props.enemyState.health >= 4 && <div className="health-bar-piece"></div>}
            {props.enemyState.health >= 5 && <div className="health-bar-piece"></div>}
            {props.enemyState.health >= 6 && <div className="health-bar-piece"></div>}
            {props.enemyState.health >= 7 && <div className="health-bar-piece"></div>}
            {props.enemyState.health >= 8 && <div className="health-bar-piece"></div>}
            {props.enemyState.health >= 9 && <div className="health-bar-piece"></div>}
            {props.enemyState.health >= 10 && <div className="health-bar-piece"></div>}
        </li>
    
    <li className="list-group-item">Attack Power: {props.enemyState.attack} </li>
    <li className="list-group-item">Defence Power: {props.enemyState.defence}</li>
    </ul>
</div> 
  )
}
