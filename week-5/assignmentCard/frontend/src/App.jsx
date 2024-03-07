import { useState } from "react";
import BusinessCard from "./components/BusinessCard"

function App() {
 const [cards, setCards] = useState([]);

 fetch("http://localhost:3000/cards")
 .then(async function(res){
  const json = await res.json();
  setCards(json.cards);
 })

  return (
    <div>
      <BusinessCard 
      cards={cards} />
    </div>
  )
}

export default App
