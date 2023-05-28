import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addBotToMyArmy, myBotArmy }) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            addBotToMyArmy={addBotToMyArmy}
            myBotArmy={myBotArmy}
            dischargeBotFromMyArmy={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
