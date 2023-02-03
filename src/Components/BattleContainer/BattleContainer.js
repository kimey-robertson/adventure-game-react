import React, { useState } from 'react'
import './BattleContainer.css'
import EnemyCard from '../EnemyCard/EnemyCard'
import BattleNodes from '../BattleNodes/BattleNodes'

export default function BattleContainer(props) {
const [enemyState, setEnemyState] = useState({
  health: 5,
  attack: 4,
  defence: 4

})

const [playerAttackTurn, setPlayerAttackTurn] = useState(true)
const [battleNodesMessages, setBattleNodesMessages] = useState(['A wild enemy appears!'])


function updateHealth(amount) {
  const health = props.playerState.health += amount
  props.setPlayerState({...props.playerState, health})
}

function updateEnergy(amount) {
  const energy = props.playerState.energy += amount
  props.setPlayerState({...props.playerState, energy})
}

function updateEnemyHealth(amount) {
  const health = enemyState.health += amount
 setEnemyState({...enemyState, health})
}

function playerAttack() {
  const randomSuperAttack = Math.floor(Math.random() * 10)
  let playerAttackDamage = Math.floor(Math.random() * props.playerState.attack + 1)
  console.log(`super: ${randomSuperAttack}`)
  if (randomSuperAttack === 0) {
    playerAttackDamage *= 2
    updateEnergy(-1)
  }
  updateEnemyHealth(-playerAttackDamage)
  if (battleNodesMessages.length < 3) {
  setBattleNodesMessages([...battleNodesMessages, `You attack the enemy for ${playerAttackDamage} damage!`])
  } else {
    setBattleNodesMessages([`You attack the enemy for ${playerAttackDamage} damage!`])  
  } 
}

function enemyAttack() {
  const enemyAttackDamage = Math.floor(Math.random() * enemyState.attack + 1)
  updateHealth(-enemyAttackDamage)
  if (battleNodesMessages.length < 3) {
    setBattleNodesMessages([...battleNodesMessages, `The enemy attacks you for ${enemyAttackDamage} damage!`])
    } else {
      setBattleNodesMessages([`The enemy attacks you for ${enemyAttackDamage} damage!`])  
    } 
  
}


function calculateBattle() {
  // Player attack
  const playerAttackCompare = props.playerState.attack + enemyState.defence;
  const playerAttackWinner = Math.floor(Math.random() * playerAttackCompare + 1);
  const enemyAttackCompare = enemyState.attack + props.playerState.defence;
  const enemyAttackWinner = Math.floor(Math.random() * enemyAttackCompare + 1);
  console.log(playerAttackWinner)
  if (playerAttackWinner <= props.playerState.attack && playerAttackTurn === true) {
    playerAttack()
    setPlayerAttackTurn(false)
    } 
    
  if (playerAttackWinner > props.playerState.attack && playerAttackTurn === true){
    if (battleNodesMessages.length < 3) {
      setBattleNodesMessages([...battleNodesMessages, `The enemy successfully defends your attack`])
      } else {
        setBattleNodesMessages([`The enemy successfully defends your attack`])  
      } 
    
    setPlayerAttackTurn(false)
  }

  if (enemyAttackWinner <= enemyState.attack && playerAttackTurn === false) {
    enemyAttack()
    setPlayerAttackTurn(true)
    } 
    
  if (enemyAttackWinner > enemyState.attack && playerAttackTurn === false){
    if (battleNodesMessages.length < 3) {
      setBattleNodesMessages([...battleNodesMessages, `You successfully defend the enemy's attack`])
      } else {
        setBattleNodesMessages([`You successfully defend the enemy's attack`])  
      } 
    setPlayerAttackTurn(true)
  }
    

    if (enemyState.health <= 0) {
      props.setPlayerState({...props.playerState, battleFinished: true})
      console.log('enemy died')
    }
}

const enemyCard = 
    <EnemyCard 
    playerState={props.playerState}
    enemyState={enemyState}/>
    
const battleNodes = 
    <BattleNodes 
    playerState={props.playerState}
    setPlayerState={props.setPlayerState}
    updateHealth={updateHealth}
    updateEnergy={updateEnergy}
    battleNodesMessages={battleNodesMessages}
    calculateBattle={calculateBattle}
    />      
  return (
    <div className='battle-container'>
        {props.playerState.battle && battleNodes}  
        {props.playerState.battle && !props.playerState.battleFinished &&enemyCard}  
    </div>
  )
}
