import React, {useState} from 'react'
import Inventory from '../Inventory/Inventory'
import Stats from '../Stats/Stats'
import EnemyCard from "../EnemyCard/EnemyCard";
import './CardContainer.css'

export default function CardContainer(props) {
const [enemy, setEnemy] = useState(false)
const enemyCard = 
        <EnemyCard 
        playerState={props.playerState}/>

function randomEnemy() {
  const randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);
  if (randomNumber <= 1) {
    console.log('enemy spawned')
    setEnemy(true)
  }
}        

  return (
    <div className='card-container'>      
    {/* <Stats 
    playerState={props.playerState}/>  */}
    <Inventory
    playerState={props.playerState}/>
    {/* {enemy && enemyCard}
          <button 
          id='test'
          className="btn"
          value='testing button'
          onClick={() => {    
            randomEnemy()                     
          }}
          >testing button
          </button>
          <button 
          id='test'
          className="btn"
          value='testing button 2'
          onClick={() => {    
            setEnemy(false)                    
          }}
          >testing button 2
          </button> */}
     </div>
  )
}
