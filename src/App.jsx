import React from "react";
import BasketballPlayerCard from "./components/BasketballPlayerCard";
import playerImage from "./assets/playerImage.jpg"; 

function App() {
  return (
    <div className="card-container">
      <BasketballPlayerCard
        name="LeBron James"
        image={playerImage}
        position="Forward"
        stats={{
          pointsPerGame: 25.4,
          assistsPerGame: 7.1,
          reboundsPerGame: 10.5,
        }}
      />
    </div>
  );
}

export default App;
