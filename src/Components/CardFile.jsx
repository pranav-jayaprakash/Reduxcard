import React, { useContext,useState } from "react";
import { UserContext } from "./Context";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';


function CardFile() {

    const [count, setcount] = useState(10)

    const Adder = ()=>{
        setcount(count+5)
    }

    
  const { User } = useContext(UserContext);
  

  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {User.slice(0, count).map((dt) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{dt.id}</Card.Title>
                <Card.Text>{dt.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        
      </Row>
      <br />
      <Button variant="dark" onClick={Adder}>Load More</Button>
    </div>
  );
}

export default CardFile;
