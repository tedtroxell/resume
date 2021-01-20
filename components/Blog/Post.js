import React, { Component, useState } from 'react';
import Link from 'next/link';
import { Button, Container, Row, Col, Jumbotron, CardBody, Card, CardImg, CardHeader, CardFooter, CardImgOverlay, Badge } from 'reactstrap';
class PostCard extends Component {

    renderTags() {
        return (
            <>
                {
                    this.props.tags.map(
                        (tag, idx) => {
                            return <Badge key={idx} className="mx-1" color={tag.type} >{tag.text}</Badge>
                        }
                    )
                }
            </>
        )
    }

    render() {
        return (
            <Card className="shadow mb-4">
                <CardBody>
                    <Row>
                        <Col className="col-4">
                            {/* <CardImgOverlay> */}
                            <Link href={{path:`/blog/[${this.props.id}]`}} className="text-dark">
                                <CardImg src={this.props.img_src} />
                            </Link>
                            {/* </CardImgOverlay> */}
                        </Col>
                        <Col className="col-8">
                            <Row>
                                <Col>

                                    <b>
                                        {this.props.title}
                                    </b>

                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col>
                                    <small>
                                        {this.props.summary}
                                    </small>


                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {this.renderTags()}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}


export { PostCard };