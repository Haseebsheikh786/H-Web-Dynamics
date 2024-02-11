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
                  <Label for="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" type="text" />
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" type="text" />
                </FormGroup>
              </div>
              <FormGroup>
                <Label for="email">Business Email</Label>
                <Input id="email" name="email" type="email" />
              </FormGroup>
              <FormGroup>
                <Label for="company">Company</Label>
                <Input id="company" name="company" type="text" />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input id="message" name="message" type="textarea" />
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

export default ContactUS;
