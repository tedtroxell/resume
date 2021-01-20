import React, { Component } from 'react';
import { Button, Container, Row, Col, Jumbotron, CardBody, Card, CardHeader, CardFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Nav';
import BlogPage from '../../components/Blog';


function makePosts() {
    return new Array(15).fill(0).map(
        (obj, idx) => {
            return {
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                tags: 'Lorem ipsum dolor sit amet'.split(' ').map((tag, idx) => { return { text: tag, type: 'primary' } }),
                img_src: 'https://images.pexels.com/photos/6334542/pexels-photo-6334542.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                title: `My First Blog Post (${idx + 1})`,
                id: 1

            }
        }
    )
}

const style = { width: "25vh", height: "25vh" };
class Blog extends Component {
    render() {
        return (
            <div className="bg-light">

                <Header />

                <Container >

                    <BlogPage posts={makePosts()} />
                </Container>
                <script src="//code.tidio.co/8oqns6vljuuwdqpoy2fpkv6mavducz4u.js" async></script>
            </ div>

        );
    }
};

export default Blog;