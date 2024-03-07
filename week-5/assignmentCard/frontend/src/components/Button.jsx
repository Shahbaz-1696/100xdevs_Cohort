
const Button = (props) => {
  return (
    <button onClick={props.onClick} style={styles.button}>{props.text}</button>
  )
}

const styles ={
  button: {
    backgroundColor: "#007FFF",
    borderRadius: "5px",
    margin: "0.7rem",
    padding: "1.2rem",
    color: "#fff",
    textDecoration: "none",
    border: "none",
    fontWeight: "bold",
    fontSize: "17px",
  }
}

export default Button