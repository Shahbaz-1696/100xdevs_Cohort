import classes from "./ParaGenerator.module.scss";
import { useMemo, useState, useRef } from "react";

const ParaGenerator = () => {
  const [wordCount, setWordCount] = useState(0);
  let [paragraph, setParagraph] = useState("");
  const inputRef = useRef();

  const randomWords = [
    "apple",
    "banana",
    "orange",
    "grape",
    "kiwi",
    "elephant",
    "giraffe",
    "zebra",
    "lion",
    "tiger",
    "mountain",
    "river",
    "ocean",
    "forest",
    "desert",
    "programming",
    "javascript",
    "react",
    "node",
    "database",
    "coffee",
    "tea",
    "pizza",
    "burger",
    "pasta",
    "happy",
    "sad",
    "excited",
    "relaxed",
    "energetic",
  ];

  const generate = useMemo(() => {
    const num = wordCount;
    let temp = "";
    for(let i = 0; i < num; i++){
      temp += randomWords[Math.floor(Math.random() * randomWords.length)] + " ";
    }
    setParagraph(() => temp);
  }, [wordCount]);

  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <h1>Para Generator</h1>
      </div>
      <div className={classes.input}>
        <input type="text" 
        placeholder="Enter Number of Words"
        ref={inputRef} />
        <button onClick={() => setWordCount(() => {
          return Number(inputRef.current.value);
        })}>Generate</button>
      </div>
      <div className={classes.result}>
        <p>{paragraph}</p>
      </div>
    </div>
  )
}

export default ParaGenerator