import React from 'react'
import './BattleNodes.css'

export default function BattleNodes(props) {

  return (
    <div className='battle-nodes'>
        <div>
            {
                props.playerState.battleFinished !== true && 
                props.battleNodesMessages.map(message => {
                    return (
                        <ul>
                            <li>{message}</li>
                        </ul>
                    )
                })
            }
            {
                props.playerState.battleFinished === true &&
                <div>congrats</div>
            }
        </div>
        { props.playerState.battleFinished !== true &&
         <div id="option-buttons" className="btn-grid"> 
             <button className='btn'
            onClick={() => {
                props.updateHealth(-2)
                props.updateEnergy(-1)
                props.setPlayerState({...props.playerState})
                console.log(props.battleNodesMessages)
            }}>
                Flee
            </button>
            <button className='btn'
            onClick={() => {
                props.calculateBattle()
            }}>
                Fight!
            </button>
            </div>
        }
            
        { props.playerState.battleFinished === true &&
        <div id="option-buttons" className="btn-grid">
            <button className='btn'
            onClick={() => {
                
            }}>
                Congratulations... continue
            </button>
        </div>    
        }

        
        
    </div>
  )
}
