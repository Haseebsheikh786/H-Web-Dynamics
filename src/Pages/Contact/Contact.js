import React from "react";
import ".././Demo/Demo.css";
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

const ContactUS = () => {
  return (
    <>
      <Container className="DemoContainer my-5 pt-3">
        <Row className="DemoContainer mt-5 pt-5">
          <Col>
            <h1 className="py-3">Looking for more information? </h1>
            <h4 className="py-3 ">
              Have a question, looking for a specific function or tool, or need
              to talk through an organizational challenge you’re looking to
              solve? Provide your contact information using this form and we’ll
              be in touch ASAP!
            </h4>
          </Col>
          <Col>
            <Card className="p-4 mx-4 shadow ">
              <h2 className="mb-3 mx-1">CONTACT US</h2>
              <div className="d-flex justify-content-between">
                <FormGroup>
                  <Label for="exampleEmail">First Name </Label>
                  <Input id="exampleEmail" name="email" type="email" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Last Name</Label>
                  <Input id="exampleEmail" name="email" type="email" />
                </FormGroup>
              </div>
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
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUS;
