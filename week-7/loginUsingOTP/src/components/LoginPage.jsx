import { useRef, useState } from "react";
import classes from "./LoginPage.module.scss";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if(index < inputRefs.length - 1 && value !== "") {
            inputRefs[index + 1].current.focus();
        }
    }

    const onSubmit = () => {
        const totalOtp = otp.join("");
        console.log(totalOtp);
        if(totalOtp.length === 4){
            if(error) {
                return setError(error);
            } else {
                navigate("/welcome");
            }
        }
    }

    const handleKeyDown = (index, event) => {
        if (index > 0 && event.key === "Backspace" && otp[index] === "") {
          inputRefs[index - 1].current.focus();
        }
      };

  return (
    <div className={classes.main}>
        <div className={classes.title}>
            <h3>Login via OTP</h3>
        </div>
        <div className={classes.input}>
          {otp.map((value, index) => (
            <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            maxLength={1}
            value={value}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onChange={(e) => handleChange(index, e.target.value)}
             />
          ))}
        </div>
        <button onClick={onSubmit}>Login</button>
    
    </div>
  )
}

export default LoginPage