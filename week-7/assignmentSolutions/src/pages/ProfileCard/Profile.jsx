import classes from "./Profile.module.scss";

const Profile = () => {
  const user =  {
      name: "Shahbaz Ansari",
      age: 27,
      location: "India",
      followers: "200K",
      likes: "350K",
      photos: 380,
    }
  
  return (
    <div className={classes.main}>
      <div className={classes.cardTop}></div>
      <div className={classes.image}>
        <img src="../../../public/profile_pic.png" alt="Image" width={80} height={80} />
      </div>
      <div className={classes.info}>
        <h2 className={classes.name}>{user.name}</h2>
        <p>{user.age}</p>
      </div>
      <div className={classes.location}>
        <p>{user.location}</p>
      </div>
      <div className={classes.breakLine}></div>
      <div className={classes.details}>
        <div className={classes.followers}>
          <h3 style={{padding: "0 15px"}}>{user.followers}</h3>
          <p style={{color: "grey"}}>Followers</p>
        </div>
        <div className={classes.likes}>
          <h3>{user.likes}</h3>
          <p style={{color: "grey"}}>Likes</p>
        </div>
        <div className={classes.photos}>
          <h3 style={{padding: "0 5px"}}>{user.photos}</h3>
          <p style={{color: "grey"}}>Photos</p>
        </div>
      </div>
    </div>
  )
}

export default Profile