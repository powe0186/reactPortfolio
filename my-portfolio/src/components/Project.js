import pic from '../images/Bookworm.PNG';
import { Card, Button, ListGroup } from 'react-bootstrap';


const buttonsStyle = {
    display: 'flex',
    justifyContent: 'space-around'
}
const Project = (props) => {

    return (

        <Card style={{ width: '18rem', height: '40rem' }}>
            <Card.Img variant="top" src={props.props.image} />
            <Card.Body>
                {console.log(props)}
                <Card.Title>{props.props.projectName}</Card.Title>
                <Card.Text>
                    {props.props.description}
                </Card.Text>
                <Card.Header>Technology Used</Card.Header>
                <ListGroup variant="flush">
                    {props.props.tech.map((type) => <ListGroup.Item>{type}</ListGroup.Item>)}
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
            <div style={buttonsStyle}>
                <Button variant="primary">Github</Button>
                <Button variant="primary">Live</Button>
            </div>
        </Card.Body>
        </Card >

        
    )
}

export default Project;