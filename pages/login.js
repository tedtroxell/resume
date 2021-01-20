import React from 'react';
import { Button, Container, Row, Col, Jumbotron, CardBody, Card, CardHeader, CardFooter, Form, FormText, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Nav';


class Login extends React.Component {
  
  handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);
    console.log( data );
    console.log( event.target[0].value, event.target[1].value);
  
  }
  render() {
    const self = this;
    return (
      <div className="bg-light" style={{ minHeight: '100vh' }}>
        <Header />
        <Container className="">
          <Row>
            <Col className="col-12 col-md-3">
            </Col>
            <Col className="col-12 col-md-6" style={{ top: '20vh' }}>
              <Card className="shadow">
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input type="email" name="email" id="email" placeholder="email goes here..." />
                    </FormGroup>
                    <FormGroup>
                      <Label for="pswd">Password</Label>
                      <Input type="password" name="password" id="pswd" placeholder="super secure password..." />
                    </FormGroup>
                    <Row>
                      <Col className="text-right">
                        <Button color="primary">Submit</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}

export default Login;