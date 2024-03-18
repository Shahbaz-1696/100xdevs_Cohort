import { useNavigate } from "react-router-dom";
import classes from "./Home.module.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
  
    <div className={classes.home}>
        <button className={classes.button} onClick={() => {
            navigate("/profile");
        }}>
          Assignment-1
        </button>
        <button className={classes.button} onClick={() => {
            navigate("/color-changer");
        }}>Assignment-2</button>
        <button className={classes.button} onClick={() => {
            navigate("/para-generator");
        }}>Assignment-3</button>
        <button className={classes.button} onClick={() => {
            navigate("/github-card");
        }}>Assignment-4</button>
        <button className={classes.button} onClick={() => {
            navigate("/login-otp");
        }}>Assignment-5</button>
        <button className={classes.button} onClick={() => {
            navigate("/birthday-wish");
        }}>Assignment-6</button>
    </div>

  )
}

export default Home