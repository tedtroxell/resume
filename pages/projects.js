import React from 'react';
import { Button, Container, Row, Col, Jumbotron, CardBody, Card, CardHeader, CardFooter, CardImg, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Nav';
import { Skillset, Experiences } from '../components/Skills';

const _style = {
    'background-size': 'cover',
    height: '100vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a")'
}
const style = { width: "25vh", height: "25vh" };
export default (props) => {
    return (
        <div className="bg-light" style={{minHeight:'100vh'}}>

            <Header />

            <Container >
                <Row className="py-3">
                    
                    <Col className="col-12 col-md-5">
                        <p className="display-4">
                            Open Source<br/>Projects
                        </p>
                        <p>
                        Hey there 👋,<br/><br/>
                        Welcome to my Projects' page where I release some of the cool stuff I've made over the years. 
                        Here you can test out machine learning models I've built and submitted in competitions or view the API specs for the and try it out for yourself.
                        If you're interested in using one of these projects commercially or at a higher rate limit, let me know!
                        <br/><br/><br/>
                        <h5>
                            Right now I don't have any projects up and running. Check back soon to see if they've been updated.
                        </h5>
                        </p>
                    </Col>
                    <Col className="col-12 col-md-7">

                        <CardImg src={'/images/projects-coming-soon.png'} />

                    </Col>
                </Row>

            </Container>
            <script src="//code.tidio.co/8oqns6vljuuwdqpoy2fpkv6mavducz4u.js" async></script>
        </ div>

    );
};