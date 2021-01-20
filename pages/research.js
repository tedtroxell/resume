import React from 'react';
import { Button, Container, Row, Col, Jumbotron, CardBody, Card, CardHeader, CardFooter,UncontrolledCollapse, CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Nav';
import { Skillset, Experiences,Timeline } from '../components/Skills';
var Latex = require('react-latex');

class Research extends React.Component {

    componentDidMount() {
        // this.getArticles();
        fetch('http://export.arxiv.org/api/query?search_query=cs.AI')
        .then(res => res.text())
        .then(
            (xml) => {
                var parseString = require('xml2js').parseString;
                var self = this;
                
                parseString(xml, function (err, result) {
                    
                    // r = result;
                    self.setState({
                        isLoaded: true,
                        items: result.feed.entry,
                        error:err
                      });
                });
                
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
        );
    }
    render () {
        const items = this.state;
        return (<div className="bg-light">
            <Header />
            <Container className="">
                <Row>
                    <Col>
                        <h1>
                            Ted's Research Page
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <small>
                            Welcome to my research page. This page hosts all of the research papers I have published to arXiv. Feel free to take a look - as always I appreciate any and all feedback on my work.
                        </small>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col className="col-12 col-md-2">
                    
                    </Col>
                    <Col className="col-12 col-md-10 list" >
                    <CardColumns className="" style={{columnCount:2}}>
                    
                    {
                        items ? items.items.map(
                            (v,i) => {
                                return (
                                    
                                        <Card className="shadow">
                                        
                                            <CardBody >
                                                <Row>
                                                    <Col>
                                                    <a href={v.link[1].$.href} className="text-dark"><h2>{ v.title[0] }</h2></a>
                                                    </Col>
                                                </Row>
                                                <hr/>
                                                <Row>
                                                    <Col className="text-italic">
                                                    <Latex>
                                                    {  v.summary[0] }
                                                    </Latex>
                                                
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                            <CardBody className="text-right">
                                                <Button className="btn btn-sm mx-2">
                                                    Notes
                                                </Button>
                                                <small>
                                                    {'Published on:' + v.published[0] }
                                                </small>
                                            </CardBody>
                                            
                                        </Card>
                                        
                                    
                                );
                            }
                        ) : null
                    }
                    </CardColumns>
                    </Col>
                    
                </Row>
            </Container>
            <script src="//code.tidio.co/8oqns6vljuuwdqpoy2fpkv6mavducz4u.js" async></script>
        </div>)
    }

}

export default Research;