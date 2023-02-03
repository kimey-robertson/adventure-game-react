import React, { useState } from 'react'
import Inventory from '../Inventory/Inventory'
import Stats from '../Stats/Stats'
import './CardContainer.css'
import BattleContainer from '../BattleContainer/BattleContainer';

export default function CardContainer(props) {
  
  return (
    <div className='card-container'>      
    <Inventory
    playerState={props.playerState}/>
    <Stats 
    playerState={props.playerState}/>
    <BattleContainer 
    playerState={props.playerState} 
    setPlayerState={props.setPlayerState}/> 
     </div>
  )
}
