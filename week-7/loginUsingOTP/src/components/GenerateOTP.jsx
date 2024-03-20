import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./GenerateOTP.module.scss";

const GenerateOTP = () => {
    const [inputNumber, setInputNumber] = useState("");
    const navigate = useNavigate();

    function handleOnClick() {
        console.log(inputNumber);
        if(inputNumber.length === 10){
            navigate("/login");
        } else {
            alert("Enter a 10 digit number");
        }
    }

  return (
    <div className={classes.main}>
        <div className={classes.title}>
            <h3>Login via OTP</h3>
        </div>
        <div className={classes.input}>
          <input type="text" id="input" name="input" placeholder="Enter your number" onChange={(e) => setInputNumber(e.target.value)} />
        </div>
        <button onClick={handleOnClick}>Send OTP</button>
    </div>
  )
}

export default GenerateOTP