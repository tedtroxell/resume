import React from 'react';
import { Button, Container, CardDeck, Row, Col, Jumbotron, CardBody,List, Card, CardHeader, CardFooter, UncontrolledCollapse, CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Nav';
import { Skillset, Experiences, Timeline, Expertise, Languages } from '../components/Skills';
import { resumeData } from '../data/resume';
import ReactEcharts from 'echarts-for-react'; 
const echarts = require('echarts');
const _style = {
    'background-size': 'cover',
    height: '100vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a")'
}
const style = { width: "25vh", height: "25vh" };

const Framework = (props) => (
    <Col className="col-12 col-md-6 py-2">
        <Card className="shadow" id={props.id} style={{ marginBottom: '1rem' }}>
            <CardBody>
                <b>{props.id + ` (${props.frameworks.length})`}</b>
            </CardBody>
        </Card>
        <UncontrolledCollapse toggler={'#' + props.id}>
            <Card>
                <CardBody>
                    <Row>
                        {
                            props.frameworks.map(
                                (v, i) => {
                                    return (<Col className="col-12 col-md-4">
                                        {v}
                                    </Col>)
                                }
                            )
                        }
                    </Row>
                </CardBody>
            </Card>
        </UncontrolledCollapse>
    </Col>
);
export default (props) => {
    return (
        <div className="bg-light">
            <Header />
            <Container >
                <Row className="pb-3">
                    <Col className="">
                        <Card className="shadow" style={{ fontSize: "2em" }}>
                            <Row>
                                <Col className=" text-center">
                                    Researcher | Engineer | Consultant
                            </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12">
                        <Card className="shadow text-justify">
                            <Row>
                                <Col className=" col-12 col-md-5 text-center">
                                    <CardBody>
                                        <picture>
                                            <img
                                                src="images/profile.jpg"
                                                alt="Rounded "
                                                className="img-fluid rounded-circle shadow"
                                                style={style}
                                            />
                                        </picture>
                                    </CardBody>
                                    <CardBody>
                                        
                                        <Button color="primary" className="btn-block shadow-sm">
                                            FAQ
                                        </Button>
                                        {/* <Button color="primary" className="btn-block shadow-sm">
                                            Email Me
                                        </Button> */}
                                        <Button color="primary" className="btn-block shadow-sm">
                                            Download Resume
                                        </Button>
                                    </CardBody>

                                </Col>
                                <Col className=" col-12 col-md-7" style={{ alignSelf: 'stretch' }}>
                                    <CardBody>
                                        {resumeData.about.me[0]}
                                    </CardBody>
                                    <div className="mx-5">
                                        <hr/>
                                    </div>
                                    <CardBody>
                                        {resumeData.about.me[1]}
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>   
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 col-md-3">
                        <Card className="shadow text-center my-3">
                            <span className="pt-3">
                                Languages
                                    </span>
                            <CardBody className="display-3">
                                5
                                </CardBody>

                        </Card>
                    </Col>
                    <Col className="col-12 col-md-3">
                        <Card className="shadow text-center my-3">
                            <span className="pt-3">
                                Years
                                    </span>
                            <CardBody className="display-3">
                                8
                                </CardBody>

                        </Card>
                    </Col>
                    <Col className="col-12 col-md-3">
                        <Card className="shadow text-center my-3">
                            <span className="pt-3">
                                Frameworks
                                    </span>
                            <CardBody className="display-3 text-center">
                                34
                                </CardBody>

                        </Card>
                    </Col>
                    <Col className="col-12 col-md-3">
                        <Card className="shadow text-center mt-3">
                            <span className="pt-3">
                                Projects
                                </span>
                            <CardBody className="display-3 text-center">
                                62
                                </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col>
                        <Card className="shadow" style={{ maxHeight: '25vh' }}>

                            <CardBody>

                                <Timeline />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="py-3">
                
                    <Col className="col-12 col-md-4">
                            <Card className="shadow" >
                                <CardBody>
                                <h5>
                                    <b>
                                    Talks
                                    </b>
                                </h5>
                                </CardBody>
                                   
                                    <List >
                                        {
                                            resumeData.talks.map(
                                                (obj,idx) => {
                                                    return (
                                                        <li>
                                                            <small>
                                                                {obj}
                                                            </small>
                                                        </li>
                                                    )
                                                }
                                            )
                                        }
                                    </List>
                               
                            </Card>
                    </Col>
                    <Col className="col-12 col-md-8">
                            <Card className="shadow">
                                <CardBody>
                                <h5>
                                    <b>
                                    Volunteering
                                    </b>
                                </h5>
                                </CardBody>
                                <CardBody>
                                    <Row>
                                        {
                                            resumeData.volunteering.map(
                                                (obj,idx) => {
                                                    return (
                                                        <Col>
                                                            <div className="font-italic">
                                                                {obj.org} | {obj.started}
                                                            </div>
                                                            <hr/>
                                                            {obj.description}
                                                        </Col>
                                                    )
                                                }
                                            )
                                        }
                                    </Row>
                                    
                                </CardBody>
                            </Card>
                    </Col>
                </Row>
                <Row className="py-3">
                <Col className="col-12">
                        <Card className="mb-3 shadow text-center">
                            
                                <h3 className=" font-italic">
                             
                                    Frameworks & Languages
                                
                                </h3>
                        
                        </Card>
                    </Col>
                    <Col className="col-12">
                        <Card className="shadow">
                            <CardBody>
                            <ReactEcharts
                            
                                option={{
                                    title: {
                                        text: 'Languages vs Projects vs Experience'
                                    },
                                    legend: {
                                        show:false
                                    },
                                    xAxis: {
                                        splitLine: {
                                            show:false
                                        },
                                        
                                    },
                                    yAxis: {
                                        splitLine: {
                                            show:false
                                        },
                                        scale: true
                                    },
                                    grid:{
                                        // top:10,
                                        // bottom:10,
                                        left:30,
                                        right:30
                                    },
                                    series: [{
                                        name: '',
                                        data: [
                                            [15,21,'Python',8],
                                            [6,15,'C++',6],
                                            [9,16,'Javascript',5],
                                            [2,4,'C#',3],
                                            [3,11,'Java',4],
                                            [19,25,'Dev/ML Ops',8],
                                        ],
                                        type: 'scatter',
                                        symbolSize: function (data) {
                                            return data[3]*5;
                                        },
                                        emphasis: {
                                            label: {
                                                show: true,
                                                formatter: function (param) {
                                                    return param.data[2];
                                                },
                                                position: 'top'
                                            }
                                        },
                                        itemStyle: {
                                            color:['#259aff']
                                        }
                                    }, ]
                                }}
                                notMerge={true}
                                lazyUpdate={true} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="py-3">
                    {
                        resumeData.frameworks.map(
                            (v, i) => {
                                return <Framework {...v} />
                            }
                        )
                    }
                </Row>
                <Row className="pb-3">

                <Col className="col-12">
                        <Card className="mb-3 shadow text-center">
                            
                                <h3 className="font-italic">
                             
                                    Projects
                                
                                </h3>
                        
                        </Card>
                    </Col>

                    <Col className=" col-12  col-md-6" style={{ alignSelf: 'stretch' }}>

                        <Card className="shadow h-100" >
                            <CardBody >
                                {resumeData.about.projects}
                            </CardBody>
                        </Card>

                    </Col>
                    <Col>
                        <Card className="shadow">

                            <CardBody>
                                <Skillset />
                            </CardBody>
                        </Card>

                    </Col>

                </Row>

                <Row className="py-3">
                    <Col className="col-12">
                        <Card className="shadow">

                            <CardBody>

                                <Experiences />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="pt-3 pb-5">
                </Row>
            </Container>
            <script src="//code.tidio.co/8oqns6vljuuwdqpoy2fpkv6mavducz4u.js" async></script>
        </ div>

    );
};