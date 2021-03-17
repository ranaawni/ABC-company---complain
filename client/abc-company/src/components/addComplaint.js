import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Form, Button, Col } from "react-bootstrap";
import "../App.css";
import Navigation from "./navigation";

export default class addComplaint extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);

    this.state = {
      title: "",
      description: "",
      type: "",
      date: new Date(),
      status: "unresolved",
    };
  }

  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    let token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    console.log(decoded, "decoded token");
    let customerId = decoded.id;

    const complaint = {
      title: this.state.title,
      description: this.state.description,
      type: this.state.type,
      date: this.state.date,
      status: this.state.status,
      customerId: customerId,
    };
    axios
      .post("http://localhost:8000/addcomplaint", complaint)
      .then((res) => (window.location = "/allcomplaintCustomer"));
  }
  render() {
    return (
      <div>
        <Navigation />
        <br />
        <Form.Group id="addCompForm">
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Complaint Title
            </Form.Label>
            <Col>
              <Form.Control
                as="textarea"
                required={true}
                name="title"
                value={this.setState.title}
                onChange={this.onChangeHandle}
                rows={2}
                placeholder="Complaint Title"
                style={{ width: "500px" }}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column lg={2}>
              Complaint Type
            </Form.Label>
            <Col>
              <Form.Control
                as="select"
                required={true}
                name="type"
                value={this.setState.type}
                onChange={this.onChangeHandle}
                style={{ width: "500px", height: "30px" }}
              >
                <option>Choose...</option>
                <option>Customer Service</option>
                <option>Product Quality</option>
              </Form.Control>
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column="sm" lg={2}>
              Complaint Description
            </Form.Label>
            <Col>
              <Form.Control
                as="textarea"
                required={true}
                name="description"
                value={this.setState.description}
                onChange={this.onChangeHandle}
                rows={5}
                placeholder="Complaint Title"
                style={{ width: "500px" }}
              />
            </Col>
          </Form.Row>
          <Button
            type="submit"
            onClick={this.onSubmit}
            style={{
              backgroundColor: " rgb(73, 81, 100)",
              height: "40px",
              width: "90px",
            }}
          >
            Submit
          </Button>
        </Form.Group>
      </div>
    );
  }
}
