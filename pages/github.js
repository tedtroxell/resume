import React, { useState } from 'react';
import { Button, Container, Row, Col, Jumbotron, CardBody, Card, CardHeader, CardFooter, CardImg, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Nav';
import { Skillset, Experiences } from '../components/Skills';
import ReactMarkdown from 'react-markdown';
import { faDownload,faFileInvoice,faStar,faEye,faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// npm install --save-dev @iconify/react @iconify-icons/vscode-icons
import { Icon, InlineIcon } from '@iconify/react';
// import fileTypePython from '@iconify-icons/vscode-icons/file-type-python';


class GithubModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.showModal = this.showModal.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    showModal() {
        this.setState({
            isModalOpen: false
        });
    }
    componentDidMount() {
        // this.getArticles();
        var self = this;
        fetch(`https://raw.githubusercontent.com/tedtroxell/${this.props.title}/main/README.md`)
            .then(res => res.text())
            .then(
                (result) => {
                    // var parseString = require('xml2js').parseString;

                    self.setState({
                        isLoaded: true,
                        md: result,
                        isModalOpen: self.state.isModalOpen
                        // error: err
                    });
                    // parseString(xml, function (err, result) {

                    //     // r = result;

                    // });

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

    render() {
        const state = this.state;
        return (
            < >
                <div className="text-right">
                <FontAwesomeIcon className="text-warning mx-1" style={{cursor:'pointer'}} icon={faStar}  /> 0 
                <span className="px-2"/>
                <FontAwesomeIcon className="text-dark mx-1" style={{cursor:'pointer'}} icon={faEye}  /> 0
                | <span className="pl-1"/>
                <a href={`https://github.com/tedtroxell/${this.props.title}/archive/main.zip/`}><FontAwesomeIcon className="text-success mx-2" style={{cursor:'pointer'}} icon={faDownload}/></a>
                <FontAwesomeIcon className="text-primary mx-2" style={{cursor:'pointer'}} icon={faFileInvoice} onClick={this.toggle} />
                    
                </div>

                <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggle}
                    className={this.props.className}
                    style={{ minWidth: '65vw' }}
                >
                    <ModalHeader toggle={this.toggle}>

                    </ModalHeader>
                    <ModalBody >
                        <ReactMarkdown source={state ? state.md : null}>

                        </ReactMarkdown>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.props.toggleModalView}>
                            Close
              </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

class GithubCard extends React.Component {


    render() {
        return (
        
                <Col className="col-12 col-md-6 pb-3">
                    <Card className="shadow">
                        <CardBody>
                            <Row className="text-right">
                            <Col className="col-12">
                                            <GithubModal title={this.props.name} body={`https://raw.githubusercontent.com/tedtroxell/${this.props.name}/main/README.md`} />
                                        </Col>
                                    
                                </Row>
                            <Row>
                                {/* <Col className="col-3">
                                    <CardImg src=""/>
                                </Col> */}
                                <Col className="col-12">
                                    <Row>
                                        <Col className="col-12">
                                            <a className="display-4 text-dark" href={this.props.html_url}><b>{this.props.name}</b></a>
                                        </Col>
                                        
                                    </Row>
                                    <Row className="py-3">
                                        <Col>

                                            {this.props.description}

                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                            
                            
                        </CardBody>
                        <CardFooter className="text-center">

                            <Row>
                                <Col>
                                    <small>License:{' '}
                                    {this.props.license.key}</small>
                                </Col>
                                {/* <Col>
                                    <small>Last Check-in:{' '}
                                    {this.props.updated_at}</small>
                                </Col> */}
                                <Col>
                                    <small>Language:{' '}
                                    <FontAwesomeIcon className="mx-2" style={{cursor:'pointer'}} icon={faPython} />
                                    </small>
                                </Col>

                            </Row>

                        </CardFooter>
                    </Card>
                </Col>
        )
    }
}

class GitHub extends React.Component {

    componentDidMount() {
        // this.getArticles();
        var self = this;
        fetch('https://api.github.com/users/tedtroxell/repos')
            .then(res => res.json())
            .then(
                (result) => {
                    // var parseString = require('xml2js').parseString;

                    self.setState({
                        isLoaded: true,
                        items: result,
                        // error: err
                    });
                    // parseString(xml, function (err, result) {

                    //     // r = result;

                    // });

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

    makeGithubCard(repo) {
        repo.key = Math.random();
        return (<GithubCard  {...repo} />)
    }

    render() {
        const state = this.state;
        console.log(state);
        return (
            <div className="bg-light" style={{ minHeight: '100vh' }}>

                <Header />

                <Container >
                    <Row className="py-3">
                        <Col className="col-3">
                            <CardImg src="https://avatars3.githubusercontent.com/u/25777332?v=4" />
                            <CardBody>
                                <a className="text-bold text-dark" href="https://github.com/tedtroxell">https://github.com/tedtroxell</a>
                                <br/>
                            </CardBody>
                            Hey there 👋, <br/><br/>
                            Welcome to my Github page. You're probably asking yourself why I created this page instead of just directly linking my Github in the nav.
                            One thing that I've noticed when I interview software engineers is that when looking at their Github portfolios I find myself going back and forth on lots of different projects.
                            With this page, all you need to do is view the README file or download the source code is click the the icon in the upper right hand of each card you see on the right. 
                            Now you can quickly read about my projects, download them and test them out for yourself!
                        </Col>
                        <Col className="col-md-9">
                            <Row>
                            {state ? state.items.map((o, i) => { return this.makeGithubCard(o, i) }) : null}
                            </Row>
                        </Col>
                    </Row>

                </Container>
                <script src="//code.tidio.co/8oqns6vljuuwdqpoy2fpkv6mavducz4u.js" async></script>
            </ div>

        );
    }
}

export default GitHub;