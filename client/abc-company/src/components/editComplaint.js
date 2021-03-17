import React, { Component } from "react";
import axios from "axios";
import Navigation from "./navigation";

export default class EditComplaint extends Component {
  constructor(props) {
    super(props);

    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      status: "",
    };
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
    });
    console.log(this.state.status, "staaatus from edit");
  }

  //to edit the complaint
  onSubmit(e) {
    e.preventDefault();
    console.log("heeellllloooo" + this.props.match.params.id);
    const complaint = {
      Status: this.state.status,
    };
    axios
      .post(
        `http://localhost:8000/editComplaint/${this.props.match.params.id}`,
        complaint
      )
      .then((res) => console.log(res.data));

    window.location = "/complaintadmin";
  }

  render() {
    return (
      <div>
        <Navigation />
        <br />
        <div
          style={{
            height: "350px",
            width: "600px",
            padding: "50px 30px 30px 30px",
            display: "flex",
            alignItems: "center",
            marginLeft: "250px",
          }}
          className="container"
        >
          <form action="#!" onSubmit={this.onSubmit}>
            <p
              style={{
                textAlign: "center",
              }}
              className="h4 mb-4"
            >
              Edit Complaint Status
            </p>
            <div className="type">
              <select
                style={{
                  width: "500px",
                  marginTop: "40px",
                  height: "50px",
                }}
                ref="userInput"
                name="status"
                required
                className="form-control"
                value={this.state.status}
                onChange={this.onChangeStatus}
              >
                Select Type
                <option value="">Select Type</option>
                <option value="unresolved">unresolved</option>
                <option value="rejected">rejected</option>
                <option value="resolved">resolved</option>
              </select>
            </div>
            <br />

            <div>
              <button
                style={{
                  marginLeft: "200px",
                  marginTop: "40px",
                  width: "100px",
                }}
                type="submit"
                value="Submit"
                className="btn btn-dark"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
