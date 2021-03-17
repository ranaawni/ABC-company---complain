import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Navigation from "./navigation";

const Complaints = (props) => (
  <tr>
    {/* <td>{props.complaint.customerId.email}</td> */}
    <td>{props.complaint.title}</td>
    <td>{props.complaint.type}</td>
    <td>{props.complaint.description}</td>
    <td>{props.complaint.date}</td>
    <td>{props.complaint.status}</td>
    <td>
      <Button
        variant="outline-primary"
        style={{ backgroundColor: " rgb(73, 81, 100)", color: "white" }}
        onClick={() => {
          window.location.href =
            "/editComplaint/" + props.complaint.complaint_id;
        }}
      >
        Check it
      </Button>{" "}
    </td>
  </tr>
);

class ComplaintsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complaints: [],
      filteredComplaints: [],
      type: "",
    };
  }

  //get the data
  componentDidMount() {
    axios
      .get("http://localhost:8000/allcomplaintCustomer")
      .then((res) => {
        this.setState({ complaints: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //looping through the complaint
  ComplaintsList() {
    return this.state.complaints.map((currentComplaint) => {
      console.log(currentComplaint, "curreeent");
      return (
        <Complaints
          complaint={currentComplaint}
          key={currentComplaint.complaint_id}
        />
      );
    });
  }

  //for filter depend on status
  onChangetype(e) {
    let { filteredComplaints } = this.state;
    let string = e.target.value;
    this.setState({
      type: e.target.value,
    });
    filteredComplaints = this.state.complaints.filter((complaint) =>
      complaint.status.includes(string)
    );
    this.setState({ filteredComplaints: filteredComplaints });
    console.log("i did it", filteredComplaints);
  }

  render() {
    return (
      <div>
        <Navigation />
        <br />
        <br />
        <div className="container text-center border border-light p-9">
          <Form>
            <Form.Group onChange={this.onChangetype.bind(this)}>
              <Form.Label>Filter Complaint</Form.Label>
              <Form.Control
                as="select"
                size="lg"
                style={{
                  width: 155,
                  height: "40px",
                  padding: "6px",
                  marginLeft: "50px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              >
                <option value="">Select by status</option>
                <option value="resolved">resolved</option>
                <option value="unresolved">unresolved</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>description</th>
                <th>Date</th>
                <th>status</th>
                <th>Edit</th>
                {/* <th>Status</th> */}
              </tr>
            </thead>
            <tbody>{this.ComplaintsList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ComplaintsList;
