import React from 'react';
import { Button, Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'website/default.css';
import Header from '../components/Nav';


const _style = {
    backgroundSize: 'cover',
    height: '125vh',
    width: '100vw',
    // backgroundRepeat: 'no-repeat',
    backgroundImage: 'url("https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a")'
};
export default (props) => {
    return (
     
        <div style={_style}>
            <Header />
            <Container fluid className="text-white p-5">
                <Row className="py-4">

                </Row>

                <Row>
                    <Col style={{margin:'auto'}} >
                        <h1 style={{fontSize:'4.75em'}}>TED</h1>

                        <h2 style={{fontSize:'4.25em'}}>TROXELL</h2>
                        <h3 className=" ml-1">Consultant | Engineer | Researcher</h3>
                        <p>
                           
        In need of expert advice, engineering or just looking to chat?
 
                        </p>
                        <a href="/resume">
                            <Button color="light" className="m-2">
                                Resume
                            </Button>
                        </a>
                        <a href="/goodfit">
                            <Button color="light" className="m-2">
                                Projects
                            </Button>
                        </a>
                        {/* <a href="/blog">
                            <Button color="light" className="m-2">
                                Blog
                            </Button>
                        </a>
                        <a href="/research">
                            <Button color="light" className="m-2">
                                Research
                            </Button>
                        </a> */}
                        <a href="https://github.com/tedtroxell">
                            <Button color="light" className="m-2">
                                GitHub
                            </Button>
                        </a>
                    </Col>

                </Row>
            </Container>
            <script src="//code.tidio.co/8oqns6vljuuwdqpoy2fpkv6mavducz4u.js" async></script>
        </div>

    )
};