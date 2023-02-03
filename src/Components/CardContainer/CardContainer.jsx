import React from 'react'
import Inventory from '../Inventory/Inventory'
import './CardContainer.css'

export default function CardContainer(props) {


  return (
    <div className='card-container'>      

    <Inventory
    playerState={props.playerState}/>
     </div>
  )
}
