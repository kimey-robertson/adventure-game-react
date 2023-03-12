import React, {useState} from 'react'
import TextNodes, {textNodes} from '../TextNodes/TextNodes'
import './Container.css'

// In Container.js, we have a piece of local state 'textNodeId' which is used to be able to navigate to the correct text node based
// on the option button selected. updateGold gold simply checks if the current text node has a 'addGold' or 'removeGold' property,
// then will update the gold based on the value of that property. I will probably do something similar with health and energy.
// the resetGame function simply resets the base state if the current text node has a 'reset' property i.e. the player dies.
// In the render function, we first display the TextNodes component, then we map over the current text nodes 'options' and displaying
// options only if they meet the requiredState OR there is no requiredState. Then on the onClick attribute of the rendered buttons,
// we add the following functions: setTextNodeId (takes you the the next text node based on the nextText property of the option),
// updateGold as we already mentioned (this must be executed BEFORE setPlayerState or the gold won't be correctly updated), 
// setPlayerState (this updates the playerState state in App.js, using the ... syntax to create a new object, which essentially copies
// what was already there, and then adds to it everything in option.setState), then finally resetGame runs if there is a 'reset' property.


const Container = (props) => {
    const [textNodeId, setTextNodeId] = useState(1)
    const currentTextNode = textNodes.find(textNode => textNode.id === textNodeId)
    const {playerState, setPlayerState} = props

    const updateGold = (option) => {
        if (option.hasOwnProperty('addGold')) {
            const gold = playerState.gold += option.addGold
            setPlayerState({...playerState, gold})
        } else if (option.hasOwnProperty('removeGold')) {
            const gold = playerState.gold -= option.removeGold
            setPlayerState({...playerState, gold})
        } else {
            return
        }
    }

    function resetGame(option) {
        if (option.hasOwnProperty('reset')) {
            setPlayerState({gold: 0, health: 5, energy: 5, attack: 3, defence: 3})
        }
    }
   
    return (
            <div className="container">
               <TextNodes 
                currentTextNode={currentTextNode} />
                <div id="option-buttons" className="btn-grid">
                    {
                        currentTextNode.options.map(option => {
                            if (!option.requiredState || option.requiredState(playerState)) {
                                return (   
                                    <button 
                                    className="btn"
                                    value={option}
                                    key={option.key}
                                    onClick={() => {
                                        setTextNodeId(option.nextText)
                                        updateGold(option)
                                        setPlayerState({...playerState, ...option.setState})
                                        resetGame(option)                             
                                    }}
                                    >{option.text}
                                    </button>
                                ) 
                            } else {
                                return null
                            }
                        })
                    }

                    
                    

                </div>
            </div>
    )
}

export default Container;
