import classes from "./ColorChanger.module.scss";
import { useEffect, useState } from "react";

const ColorChanger = () => {
  const [bgColor, setBgColor] = useState("");

  const colors = [{
    name: "Red",
    color: "red",
  }, {
    name: "Yellow",
    color: "yellow",
  }, {
    name: "Black",
    color: "black",
  }, {
    name: "Purple",
    color: "purple",
  }, {
    name: "Green",
    color: "green",
  }, {
    name: "Blue",
    color: "blue",
  }, {
    name: "Default",
    color: "orange",
  }]

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor]);

  function handleOnClick (bgColor) {
    console.log(bgColor);
    setBgColor(bgColor);
  }

  return (
    <div className={classes.main}>
      {colors.map((color, index) => (
        <div key={index}>
          <button style={{backgroundColor: color.color}} className={classes.buttons} onClick={() => handleOnClick(color.color)}>{color.name}</button>
        </div>
      ))}
    </div>
  )
}

export default ColorChanger