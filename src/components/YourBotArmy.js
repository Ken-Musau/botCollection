import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ myBotArmy, enlistBotToMyArmy, setMyBotArmy, deleteBot }) {
  //your bot army code here...

  
  function dischargeBotFromMyArmyHanlder(bot) {
    const updatedBotArmy = myBotArmy.filter((myBot) => myBot.id !== bot.id);
    setMyBotArmy(updatedBotArmy);
  }
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {myBotArmy.map((bot) => (
            <BotCard
              myBotArmy={myBotArmy}
              key={bot.id}
              bot={bot}
              enlistBotToMyArmy={enlistBotToMyArmy}
              dischargeBotFromMyArmy={dischargeBotFromMyArmyHanlder}
              deleteBot={deleteBot}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
