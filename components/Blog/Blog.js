import React , { Component, useState } from 'react'
import { Button, Container, Row, Col, Jumbotron, CardBody, Card, CardHeader, CardFooter, CardImgOverlay, Badge, CardImg } from 'reactstrap';
import {PostCard} from './Post';
class BlogPage extends Component {

    render () {
        return (
            <>
            <Row>
            <Col className="col-9 col-xs-12 cl-sm-12">
                <h1 className="display-4">
                    Rolling With The Punches
                </h1>
                <div>

                </div>
            </Col>
            <Col className="col-3 col-xs-12 cl-sm-12">

            </Col>
            </Row>
            <Row>
                <Col className="col-9 col-xs-12 cl-sm-12">
                    {
                        this.props.posts.map(
                            (post,idx) => {
                                return ( 
                                            <Row>
                                                <Col>
                                                   
                                                    <PostCard {...post} />
                                                
                                                </Col>
                                            </Row>
                                        )
                            }
                        )
                    }
                </Col>
                <Col className="col-3 col-xs-12 cl-sm-12">
                    <Row >
                        <Col>
                            <Card className="shadow">
                                <CardBody>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <Card className="shadow">
                                <CardBody>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </>
        )
    }

}

export default BlogPage;