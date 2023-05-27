import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [myBotArmy, setMyBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  function addBotToMyArmyHandler(){
    console.log('Added to my army');
  }

  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={bots} addBotToMyArmy={addBotToMyArmyHandler}/>
    </div>
  );
}

export default BotsPage;
