import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [myBotArmy, setMyBotArmy] = useState([]);


  useEffect(() => {
    fetchBots();
  }, []);
  
  // fetch bets from api
  function fetchBots() {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((error) => console.log("Error fetching bots:", error));
  }

  // Add clicked bots into myBotArmy variable
  function enlistBotToMyArmyHandler(bot) {
    if (!myBotArmy.some((myBot) => myBot.id === bot.id)) {
      setMyBotArmy([...myBotArmy, bot]);
    }
  }
  

  // Delete bot when x button is clicked in YourBotArmy Component
  function deleteBotHandler(bot) {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const updatedBots = bots.filter((b) => b.id !== bot.id);
        setBots(updatedBots);

        const updatedBotArmy = myBotArmy.filter((myBot) => myBot.id !== bot.id);
        setMyBotArmy(updatedBotArmy);
      })
      .catch((error) => {
        console.log("Error deleting bot:", error);
      });
  }

  return (
    <div>
      <YourBotArmy
        myBotArmy={myBotArmy}
        enlistBotToMyArmy={enlistBotToMyArmyHandler}
        setMyBotArmy={setMyBotArmy}
        deleteBot={deleteBotHandler}
      />
      <BotCollection
        bots={bots}
        enlistBotToMyArmy={enlistBotToMyArmyHandler}
        myBotArmy={myBotArmy}
        deleteBot={deleteBotHandler}
      />
    </div>
  );
}

export default BotsPage;
