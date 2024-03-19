import { useRef, useState, useMemo } from "react";
import classes from "./BirthdayWish.module.scss";
import Card1svg from "../../assets/card1.svg?react";
import Card2svg from "../../assets/card2.svg?react";
import Card3svg from "../../assets/card3.svg?react";


const BirthdayWish = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [cards, setCards] = useState([]);

  const cardsConfig = [
    {
      wish: "Happy Birthday!",
      svg: <Card1svg />, 
    },
    {
      wish: "Many many happy returns of the day",
      svg: <Card2svg />,
    },
    {
      wish: "Wish you many more years to come in future!",
      svg: <Card3svg />
    },
  ]

  function onSubmit() {
    const inputValue = inputRef.current.value;
    setName(() => inputValue);
  }

  const fillCards = useMemo(() => {
    if (name !== "") {
      setCards(() => {
        return cardsConfig.map((c) => {
          return { ...c, name };
        });
      });
    }
  }, [name, setCards]);


  return (
    <>

    <div className={classes.main}>
      <div className={classes.title}>
        <h2>Birthday Wish Cards</h2>
        <div className={classes.input}>
        <label>Enter your name</label>
        <input type="text" placeholder="Enter your name" ref={inputRef} />
        </div>
        <button onClick={onSubmit}>Done</button>
      </div>
    </div>

    {cards.length ? (
      <div>
        {cards.map(card => (
          <div key={card.name}>
          <Cards name={name} {...card} />
          </div>
        ))}
      </div>
    ) : (
      ""
    )}
    </>
  )
}

function Cards({svg, wish, name}){
  return (
    <div>
      <div>{svg}</div>

      <div>
        <p>{wish}</p>
        <h5>{name}</h5>
      </div>
    </div>
  )
}

export default BirthdayWish