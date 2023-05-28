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

  function addBotToMyArmyHandler(bot) {
    const isBotAlreadyInArmy = myBotArmy.some((myBot) => myBot.id === bot.id);

    if (!isBotAlreadyInArmy) {
      const myBotArmyList = myBotArmy.filter((myBot) => myBot.id !== bot.id);
      setMyBotArmy([...myBotArmyList, bot]);
    }
  }
  // console.log(myBotArmy);

  return (
    <div>
      <YourBotArmy
        myBotArmy={myBotArmy}
        addBotToMyArmy={addBotToMyArmyHandler}
        setMyBotArmy={setMyBotArmy}
      />
      <BotCollection
        bots={bots}
        addBotToMyArmy={addBotToMyArmyHandler}
        myBotArmy={myBotArmy}
      />
    </div>
  );
}

export default BotsPage;
