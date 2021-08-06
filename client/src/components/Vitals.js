import React  from 'react'; 
import {Card} from 'react-bootstrap';


const cardStyle = {
    width: '10rem',
    height: '6rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)'
}


function Vitals() {
    return(
        <div className="vitalsDiv">
            
                    <Card style={cardStyle}> 
                        <Card.Body>
                            <Card.Title>HEIGHT</Card.Title>
                            <Card.Text>
                            187cm
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>WEIGHT</Card.Title>
                            <Card.Text>
                            65kg
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>BMI</Card.Title>
                            <Card.Text>
                            18.6
                            <p style = {{color: "green"}}>NORMAL</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>     
                
        </div>
        
    )
}

export default Vitals;