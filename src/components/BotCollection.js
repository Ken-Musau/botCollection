import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBotToMyArmy, myBotArmy, deleteBot }) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            enlistBotToMyArmy={enlistBotToMyArmy}
            myBotArmy={myBotArmy}
            dischargeBotFromMyArmy={() => {}}
            deleteBot={deleteBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
