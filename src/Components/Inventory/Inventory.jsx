import React from "react";
import './Inventory.css'

// Inventory.js is a simple component that renders the 'items' in playerState if they are true. The items are categorised into
// 'weapons', 'tools', and 'other' (this may change). It also render the current state of playerState.gold as it changes.


export default function Inventory(props) {

  return (
    <div className="card inv">
        <div className="card-body">
            <h5 className="card-title">Inventory</h5>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Gold: {props.playerState.gold}</li>
            <li className="list-group-item">Weapons:
                <ul>
                    {props.playerState.sword && <li>Sword</li>}
                    {props.playerState.shield && <li>Shield</li>}
                </ul>
            </li>
            <li className="list-group-item">Tools:
                <ul>
                    {props.playerState.torch && <li>Torch</li>}
                </ul>
            </li>
            <li className="list-group-item">Other:
                <ul>
                    {props.playerState.greenRocks && <li>Green Rocks</li>}
                </ul>
            </li>    
        </ul>
    </div>
  )
}
