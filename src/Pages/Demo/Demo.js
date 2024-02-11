import React from "react";
import "./Demo.css";
import {
  Button,
  Card,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { Form } from "react-router-dom";
const Demo = () => {
  return (
    <>
      <Container className="DemoContainer my-5 pt-3">
        <Row className="DemoContainer mt-5 pt-5">
          <Col>
            <h4 className="py-2">Get a Demo</h4>
            <h1 className="py-2">
              Want to know how we can help your organization?
            </h1>
            <h4 className="py-2">
              Our team is excited to talk to you about the challenges you're
              looking to solve. To request a custom demo of Origami Risk, fill
              out this form and one of our sales consultants will be in touch
              ASAP!{" "}
            </h4>
          </Col>
          <Col>
            <Card className="px-4 py-3 mx-4 shadow ">
              <FormGroup>
                <Label for="exampleEmail">First Name </Label>
                <Input id="exampleEmail" name="email" type="email" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Last Name</Label>
                <Input id="exampleEmail" name="email" type="email" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Business Email</Label>
                <Input id="exampleEmail" name="email" type="email" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Company</Label>
                <Input id="exampleEmail" name="email" type="email" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Message</Label>
                <Input id="exampleEmail" name="email" type="email" />
              </FormGroup>
              <div className="text-end m-2">
                <Button color="danger">Submit</Button>
              </div>
              <p className="mt-3">
                Or Call Us: <a href="tel:+923427282514">+92 342 7282 514</a>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Demo;
