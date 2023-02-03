import React from "react";
import "./TextNodes.css";


// This file simply contains all the text nodes, as well as the options buttons, setState, requiredState, etc.
// The component then returns the 'text' property of the current text node.


export const textNodes = [
  {
    id: 1,
    text: "Welcome to this text based adventure game. Click start to begin:",
    options: [
      {
        text: "START",
        key: 1,
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "You wake up in a dark cave, with a huge headache and no memory of how you got there. Next to you are some glowing green rocks. They might be dangerous. What would you like to do?",
    options: [
      {
        text: "Take the rocks",
        key: 2,
        setState: { greenRocks: true },
        nextText: 3,
      },
      {
        text: "Leave the rocks ",
        key: 3,
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "You venture forth down the road, and bump into a wandering trader.",
    options: [
      {
        text: "Trade the rocks for a sword",
        setState: { sword: true, greenRocks: false },
        nextText: 4,
        requiredState: (currentState) => {
          if (currentState.greenRocks) {
            return true;
          }
          return false;
                  // This requiredState is showing more clearly how the function works. 
                  // It's simply using currentState as a parameter, which gets used as playerState in Container.js
                  // It returns true if the property in playerState is true, else returns false.
                  // All the requiredState functions in the rest of this file all do the same thing, just with a more concise syntax.
                  // You can use this one for reference.
        },
      },
      {
        text: 'Trade the rocks for a shield',
        requiredState: (currentState) => currentState.greenRocks,
        setState: {shield: true, greenRocks: false },
        nextText: 5,
      },
      {
        text: 'Trade the rocks for some gold',
        requiredState: (currentState) => currentState.greenRocks,
        setState: { greenRocks: false },
        addGold: 1,
        nextText: 6,
      },
      {
        text: 'Ignore trader',
        nextText: 7,

      }
    ],
  },
  {
    id: 4,
    text: "The trader is happy with the strange green rocks, and hands you a fine looking steel sword.",
    options: [
      {
        text: "Continue",
        nextText: 7,
      },
    ],
  },
  {
    id: 5,
    text: "The trader is content with the trade, and hands you a sturdy shield in return.",
    options: [
      {
        text: "Continue",
        nextText: 7,
      },
    ],
  },
  {
    id: 6,
    text: "The trader smiles and quickly grabs the green rocks from you, and drops one gold piece into your hand.",
    options: [
      {
        text: "Continue",
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    text: "You leave the trader and walk for many hours before stumbling onto a small town next to a dangerous looking castle.",
    options: [
      {
        text: "Continue.",
        nextText: "town-first-entry",
      },
    ],
  },
  {
    id: "town-first-entry",
    text: "A sign at the entrance of the town says 'Maple Town'. While inside the town you are safe from enemies.",
    options: [
      {
        text: "Continue.",
        nextText: "town",
      },
    ],
  },
  {
    id: "town",
    text: "Welcome to Maple Town. What would you like to do?",
    options: [
      {
        text: "Explore the castle.",
        requiredState: (currentState) =>
          !currentState.sword || !currentState.shield,
        nextText: "castle-dead",
        reset: true
      },
      {
        text: "Explore the castle.",
        requiredState: (currentState) =>
          currentState.sword && currentState.shield,
        nextText: "castle-win",
      },
      {
        text: "Talk to the innkeeper",
        requiredState: (currentState) => currentState.stayedAtInn,
        nextText: "talk-to-innkeeper",
      },
      {
        text: "Find a room to sleep in in the town.",
        requiredState: (currentState) =>
          currentState.gold >= 1 && !currentState.stayedAtInn,
        setState: { stayedAtInn: true } ,
        removeGold: 1,
        nextText: "pay-innkeeper",
      },
      {
        text: "Find a room to sleep in in the town.",
        requiredState: (currentState) =>
          currentState.gold === 0 && !currentState.stayedAtInn,
        nextText: "inn-dead",
      },
      {
        text: "Head back to the cave",
        requiredState: (currentState) => currentState.travelDisclaimer === true,
        nextText: "travel",
      },
      {
        text: "Head back to the cave",
        requiredState: (currentState) =>
          !currentState.travelDisclaimer === true,
        nextText: "travel-disclaimer",
      },
    ],
  },
  {
    id: "castle-dead",
    text: "You encounter a fiery dragon in the castle, and despite your efforts to fight back, he kills you.",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
  {
    id: "castle-win",
    text: "You kill the dragon and win the game!!",
    options: [
      {
        text: "Restart",
        nextText: 1,
        reset: true
      }
    ]  
  },
  {
    id: "pay-innkeeper",
    text: "You pay the innkeeper 1 gold and rest for the night.",
    options: [
      {
        text: "Continue",
        nextText: "town",
      },
    ],
  },
  {
    id: "inn-dead",
    text: "Without any gold, you break in to the inn at night and sleep in the bed, only to be awoken by town guards and thrown into jail.",
    options: [
      {
        text: "Restart",
        nextText: 1,
        reset: true
      },
    ],
  },
  {
    id: "talk-to-innkeeper",
    text: '"Hi there, how can I help?"',
    options: [
      {
        text: "Ask about the castle",
        nextText: "ask-castle",
      },
      {
        text: "Ask about the cave",
        nextText: "ask-cave",
      },
      {
        text: "Ask about the green rocks",
        setState: { priceGreenRocks: true },
        nextText: "ask-rocks",
      },
      {
        text: "Ask him to trade",
        nextText: "innkeeper-trade",
      },
      {
        text: "Leave",
        nextText: "town",
      },
    ],
  },
  {
    id: "ask-castle",
    text: "Oh that castle is terribly dangerous.  A foul dragon lives there. Your only hope of beating him is with high quality weaponry.",
    options: [
      {
        text: "Ask another question",
        nextText: "talk-to-innkeeper",
      },
      {
        text: "Leave",
        nextText: "town",
      },
    ],
  },
  {
    id: "ask-cave",
    text: "I don't know much about that cave, only that if you wish to search it you will need a light source.",
    options: [
      {
        text: "Ask another question",
        nextText: "talk-to-innkeeper",
      },
      {
        text: "Leave",
        nextText: "town",
      },
    ],
  },
  {
    id: "ask-rocks",
    text: "Ah yes, these are very valuable. If you have any I'll buy them for 5 gold pieces",
    options: [
      {
        text: "Ask another question",
        nextText: "talk-to-innkeeper",
      },
      {
        text: "Leave",
        nextText: "town",
      },
    ],
  },
  {
    id: "innkeeper-trade",
    text: '"Take a look:"',
    options: [
      {
        text: "Buy a sword (5 gold)",
        requiredState: (currentState) =>
          currentState.gold === 5 && !currentState.sword,
        setState: { sword: true },
        removeGold: 5,
        nextText: "bought-sword",
      },
      {
        text: "Buy a shield (5 gold)",
        requiredState: (currentState) =>
          currentState.gold === 5 && !currentState.shield,
          setState: { shield: true },
        removeGold: 5,
        nextText: "bought-shield",
      },
      {
        text: "Buy a torch (1 gold)",
        requiredState: (currentState) => currentState.gold === 1,
        setState: { torch: true },
        removeGold: 1,
        nextText: "bought-torch",
      },
      {
        text: "Sell your green rocks (5 gold)",
        requiredState: (currentState) => currentState.greenRocks,
        setState: { greenRocks: false } ,
        addGold: 5,
        nextText: "sold-rocks",
      },
      {
        text: "Ask another question",
        nextText: "talk-to-innkeeper",
      },
      {
        text: "Leave",
        nextText: "town",
      },
    ],
  },
  {
    id: "bought-sword",
    text: "Thank you. Here's your sword",
    options: [
      {
        text: "Trade something else",
        nextText: "innkeeper-trade",
      },
      {
        text: "Leave",
        nextText: "town",
      },
    ],
  },
  {
    id: "bought-shield",
    text: "Thank you. Here's your shield",
    options: [
      {
        text: "Trade something else",
        nextText: "innkeeper-trade",
      },
      {
        text: "Leave",
        nextText: "town",
      },
    ],
  },
  {
    id: "bought-torch",
    text: "Thank you. Here's your torch",
    options: [
      {
        text: "Trade something else",
        nextText: "innkeeper-trade",
      },
      {
        text: "Leave",
        nextText: "town",
      },
    ],
  },
  {
    id: "sold-rocks",
    text: "Thank you. Here's your gold",
    options: [
      {
        text: "Trade something else",
        nextText: "innkeeper-trade",
      },
      {
        text: "Leave",
        nextText: "town",
      },
    ],
  },
  {
    id: "travel-disclaimer",
    text: "You're about to leave the safety of the town, and you may be attacked. Are you sure you want to continue?",
    options: [
      {
        text: "Continue",
        nextText: "travel",
      },
      {
        text: "Continue, and don't ask again",
        setState: { travelDisclaimer: true },
        nextText: "travel",
      },
    ],
  },
  {
    id: "travel",
    text: "You start walking down the road....",
    options: [
      {
        text: "Continue",
        nextText: 24,
      },
    ],
  },
  {
    id: "enemy",
    text: "You encounter an enemy. What do you want to do?",
    options: [
      {
        text: "Attempt to flee (lose 2 health)",
        setState: { battle: false, enemyCardToggle: true },
        removeHealth: 2,
        nextText: 24,
      },
      {
        text: "Attack",
        attack: true,
      },
    ],
  },
  {
    id: 24,
    text: "You walk along the trail, and you run into the trader again.",
    options: [
      {
        text: "Ask him what he's doing",
        nextText: 26,
      },
      {
        text: "Leave him alone",
        requiredState: (currentState) => !currentState.torch,
        nextText: 29,
      },
      {
        text: "Leave him alone",
        requiredState: (currentState) => currentState.torch,
        nextText: 31,
      },
      {
        text: "Interrogate him about the green rocks.",
        requiredState: (currentState) =>
          currentState.priceGreenRocks && !currentState.alreadyInterrogated,
        setState: { alreadyInterrogated: true },
        addGold: 1,
        nextText: 27,
      },
      {
        text: "Head back to town",
        nextText: "town",
      },
    ],
  },
  {
    id: 26,
    text: "Trying not to be disturbed....",
    options: [
      {
        text: "Leave him alone",
        requiredState: (currentState) => !currentState.torch,
        nextText: 29,
      },
      {
        text: "Leave him alone",
        requiredState: (currentState) => currentState.torch,
        nextText: 31,
      },
      {
        text: "Head back to town",
        nextText: "town",
      },
    ],
  },
  {
    id: 27,
    text: "\"Okay look I'm sorry! Please don't tell the innkeeper on me. All I have is 1 gold, here take it.\"",
    options: [
      {
        text: "Take the gold",
        nextText: 28,
      },
    ],
  },
  {
    id: 28,
    text: "Would you like to continue to the cave, or head back to the town?",
    options: [
      {
        text: "Continue to the cave",
        requiredState: (currentState) => !currentState.torch,
        nextText: 29,
      },
      {
        text: "Continue to the cave",
        requiredState: (currentState) => currentState.torch,
        nextText: 31,
      },
      {
        text: "Head back",
        nextText: "town",
      },
    ],
  },
  {
    id: 29,
    text: "You enter the cave, and without any light source, you quickly get lost and fall into a deep hole",
    options: [
      {
        text: "Restart",
        nextText: 1,
        reset: true
      },
    ],
  },
  {
    id: 31,
    text: "You enter the cave, and light your torch. There are three pathways to follow. Which way would you like to go?",
    options: [
      {
        text: "Take the left path",
        requiredState: (currentState) => !currentState.sword,
        nextText: 32,
      },
      {
        text: "Take the left path",
        requiredState: (currentState) => currentState.sword,
        setState: { greenRocks: true },
        nextText: 38,
      },
      {
        text: "Take the middle path",
        requiredState: (currentState) => !currentState.beenHereBefore,
        nextText: 33,
      },
      {
        text: "Take the middle path",
        requiredState: (currentState) => currentState.beenHereBefore,
        nextText: 37,
      },
      {
        text: "Take the right path",
        requiredState: (currentState) => !currentState.shield,
        nextText: 34,
      },
      {
        text: "Take the right path",
        requiredState: (currentState) => currentState.shield,
        setState: { greenRocks: true },
        nextText: 39,
      },
      {
        text: "Put out your torch and leave the cave",
        nextText: 36,
      },
    ],
  },
  {
    id: 32,
    text: "A gigantic spider jumps down from the ceiling and wraps you in it's web. You'll be dinner tonight",
    options: [
      {
        text: "Restart",
        nextText: 1,
        reset: true
      },
    ],
  },
  {
    id: 33,
    text: "This area is quite empty, but you notice some more of those glowing green rocks from before. Do you want to take them?",
    options: [
      {
        text: "Take them",
        setState: { greenRocks: true, beenHereBefore: true },
        nextText: 35,
      },
      {
        text: "Go back",
        nextText: 35,
      },
    ],
  },
  {
    id: 34,
    text: "You follow this path, for quite a while until suddenly a strong burst of wind comes from nowhere and blows out your torch. Without any light source, you quickly get lost and fall into a deep hole.",
    options: [
      {
        text: "Restart",
        nextText: 1,
        reset: true
      },
    ],
  },
  {
    id: 35,
    text: "You return to the entrance area of the cave. Where would you like to go?",
    options: [
      {
        text: "Take the left path",
        requiredState: (currentState) => !currentState.sword,
        nextText: 32,
      },
      {
        text: "Take the left path",
        requiredState: (currentState) => currentState.sword,
        setState: { greenRocks: true },
        nextText: 38,
      },
      {
        text: "Take the middle path",
        requiredState: (currentState) => !currentState.beenHereBefore,
        nextText: 33,
      },
      {
        text: "Take the middle path",
        requiredState: (currentState) => currentState.beenHereBefore,
        nextText: 37,
      },
      {
        text: "Take the right path",
        requiredState: (currentState) => !currentState.shield,
        nextText: 34,
      },
      {
        text: "Take the right path",
        requiredState: (currentState) => currentState.shield,
        setState: { greenRocks: true },
        nextText: 39,
      },
      {
        text: "Put out your torch and leave the cave",
        nextText: 36,
      },
    ],
  },
  {
    id: 36,
    text: "You leave the cave and are back in the sunlight. Do you want to go back to town or talk to the trader again?",
    options: [
      {
        text: "Talk to the trader",
        nextText: 24,
      },
      {
        text: "Return to the town",
        nextText: "town",
      },
    ],
  },
  {
    id: 37,
    text: "There's nothing in this area",
    options: [
      {
        text: "Go back",
        nextText: 35,
      },
    ],
  },
  {
    id: 38,
    text: "A gigantic spider jumps down from the ceiling and attempts to wrap you in it's web. Luckily you have your trusty sword handy and swing at the spider before it can reach you. Behind it's corpse you notice some more green rocks.",
    options: [
      {
        text: "Take them",
        nextText: 35,
      },
    ],
  },
  {
    id: 39,
    text: "You follow this path, for quite a while until suddenly a strong burst of wind comes from nowhere. Luckily your torch was hidden behind your trusty shield and it stays lit. At the end of the corridor you find some more green rocks on the ground.",
    options: [
      {
        text: "Take them",
        nextText: 35,
      },
    ],
  },
];

export default function TextNodes(props) {
  return <div>{props.currentTextNode.text}</div>;
}
