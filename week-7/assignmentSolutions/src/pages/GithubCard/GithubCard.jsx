import classes from "./GithubCard.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const GithubCard = () => {
  const [res, setRes] = useState("");
  const username = "Shahbaz-1696";
  const api = `https://api.github.com/users/${username}`;

  useEffect(() => {
    axios.get(api).then((response) => setRes(() => response.data));
  }, []);

  if(res) {
    return (
      <div className={classes.main}>
        <div className={classes.cardTop}></div>
        <div>
          <img src={res.avatar_url} alt="Image" width={80} height={80} className={classes.image} />
        </div>
        <div className={classes.info}>
          <h1>{res.name}</h1>
          <h3>{res.bio}</h3>
        </div>
        <div className={classes.break}></div>
        <div className={classes.details}>
          <h4>Location: {res.location}</h4>
          <p>Followers: {res.followers}</p>
          <p>Following: {res.following}</p>
          <p>Public Repos: {res.public_repos}</p>
          <p>Twitter: {res.twitter_username}</p>
        </div>
      </div>
    )
  } else {
    return null
  }

  
}

export default GithubCard