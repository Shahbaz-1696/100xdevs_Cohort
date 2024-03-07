import Button from "./Button"


const BusinessCard = ({cards}) => {
  
  return (
    <div style={styles.card}>
    {cards.map(function(card){
      return(
    <div key={card.name}>
      <h1 style={styles.name}>{card.name}</h1>
      <p style={styles.description}>{card.description}</p>
      <div>
        <h3 style={styles.interestsHeader}>Interests</h3>
        <ul style={styles.interestsList}>
          {card.interests.map(function(interest){
            <li style={styles.interestsItem} key={interest}>{interest}</li>
          })}
        </ul>
        <div style={styles.socialLinks}>
          <a href={card.linkedInUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
          <br />
          <a href={card.twitterUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a>
          
        </div>
      </div>
    </div>
      )
    })}
      
    </div>
  )
}

const styles = {
  card: {
    borderRadius: "10px",
    maxWidth: "400px",
    backgroundColor: "#f8f9fa",
    marginLeft: "20px",
    marginRight: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    marginBottom: "50px",
  },
  name: {
    marginBottom: "10px",
    color: "#333",
    fontSize: "20px",
  }, 
  description: {
    marginBottom: "10px",
    color: "#555",
    fontSize: "15px",
  }, 
  interestsHeader: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#333",
  }, 
  interestsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  }, 
  interestsItem: {
    fontSize: "15px",
    color: "#555",
    marginBottom: "5px",

  },
  socialLinks: {
    display: 'flex',
    marginBottom: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff', // Text color
    padding: '10px 15px', // Padding for the button
    borderRadius: '5px', // Border radius for rounded corners
    backgroundColor: '#007BFF', // Background color for the button
    display: 'inline-block', // Display as inline-block to be side by side
    margin: '10px', // Margin between buttons
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
  }
}

export default BusinessCard