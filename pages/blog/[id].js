import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Jumbotron, CardBody, Card, CardImg, CardHeader, CardFooter, CardImgOverlay, Badge } from 'reactstrap';
// import {Post} from '../../components/Blog';
import Header from '../../components/Nav';

class Post extends Component {


    renderSections() {
        return this.props.sections.map(
            (section, idx) => {
                return (
                    <Row key={idx}>
                        <CardBody>
                            {section.img ? <CardImg src={section.img} /> : null}
                        </CardBody>
                        <CardBody>
                            <div dangerouslySetInnerHTML={{ __html: section.text ? section.text : '' }}>
                                
                            </div>
                        </CardBody>
                    </Row>
                )
            }
        )
    }

    render() {
        return (

            <Row >
                {/* <Col className="col-2 text-justify">
                <Card className="shadow">
                        <CardBody>
                            ..........
                        </CardBody>

                       
                    </Card>
                </Col> */}
                <Col className="col-12 col-md-1"></Col>
                <Col className="col-12 col-md-3">
                </Col>
                <Col className="col-12 col-md-7 text-justify" >
                    
                        <Card className="shadow my-1 py-0">
                        <CardBody>
                            <h1>
                                {this.props.title}
                            </h1>
                        </CardBody>
                        </Card>
                    <div className="" style={{overflowY:'scroll',overflowX:'hidden',maxHeight:'95vh'}}>
                        {this.renderSections()}
                    </div>

                </Col>
                {/* <Col className="col-2 text-justify">
                <Card className="shadow">
                        <CardBody>
                            ..........
                        </CardBody>

                       
                    </Card>
                </Col> */}
            </Row>

        )
    }

}


class PostPage extends Component {
    render() {
        const data = {
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            tags: 'Lorem ipsum dolor sit amet'.split(' ').map((tag, idx) => { return { text: tag, type: 'primary' } }),
            img_src: 'https://images.pexels.com/photos/6334542/pexels-photo-6334542.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            title: `My First Blog Post (1)`,
            sections: new Array(8).fill(0).map(
                (obj, idx) => {
                    return {
                        img: 'https://images.pexels.com/photos/6334542/pexels-photo-6334542.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                        text: "Sed ut <a href='https://google.com'>perspiciatis</a> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    }
                }
            )

        };
        return (
        <div className="bg-ligth">

            <Header />
            <Container >
                <Post {...data}/>
            </Container>
            <script src="//code.tidio.co/8oqns6vljuuwdqpoy2fpkv6mavducz4u.js" async></script>
        </ div>

    );
    }
};

export default PostPage;