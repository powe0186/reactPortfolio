import pic from '../images/Bookworm.PNG';
import { Card, Button, ListGroup } from 'react-bootstrap';


const buttonsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '20px',
}

const cardStyle = {
    width: '18rem', 
    height: '40rem', 
    margin: 20,
    backgroundColor: '#063049',
    color: 'white',
    border: '#77a5bf 3px solid'
}
const Project = (props) => {

    return (

        <Card style={ cardStyle }>
            <Card.Img variant="top" src={props.props.image} />
            <Card.Body>
                {console.log(props)}
                <Card.Title>{props.props.projectName}</Card.Title>
                <Card.Text>
                    {props.props.description}
                </Card.Text>
                <Card.Header style={{fontSize: 20}}>Technology Used:</Card.Header>
                <ListGroup variant="flush" style={{ border: 'white solid 1px', borderRadius: 5}}>
                    {props.props.tech.map((type) => <ListGroup.Item style={ {backgroundColor: '#063049', color: 'white', }}>{type}</ListGroup.Item>)}
                    <ListGroup.Item style={ {backgroundColor: '#063049'}}></ListGroup.Item>
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