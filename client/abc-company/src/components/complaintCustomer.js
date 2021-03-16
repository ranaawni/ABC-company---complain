import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import '../App.css';

const Complaints = (props) => (
    
  <tr>
    <td>{props.complaint.title}</td>
    <td>{props.complaint.description}</td>
    <td>{props.complaint.type}</td>
    <td>{props.complaint.date}</td>
    <td>{props.complaint.status}</td>
  </tr>
  
);
class ComplaintsList extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      complaints: [],
    };
    console.log(props,'prooooops')
  }
 


  componentDidMount() {
    // let token = localStorage.getItem("token");
    // var decoded = jwt_decode(token);
    // let customerId = decoded._id;

    axios
      .get("/allcomplaintCustomer")
      .then((res) => {
        console.log(res.data, "res");
        this.setState({ complaints: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ComplaintsList() {
    let token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    console.log(decoded,'decoded token')
    let customerId = decoded.id;
    return this.state.complaints
      .filter((complaint) => complaint.user_id === customerId).map((currentComplaint) => {
          console.log(currentComplaint,'curreeent')
        return (
          <Complaints complaint={currentComplaint} key={currentComplaint.complaint_id} />
        );
      });
  }

  render() {
    return (
      <div>
        <br />
        <div className="container text-center border border-light p-9">
          <table className="Customertable">
            <thead className="thead">
              <tr>
                
                <th>Title</th>
                <th>Description</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{this.ComplaintsList()}</tbody>
          </table>
        </div>
        <button
        id='btnAddComp'
          style={{
            width: "200px",
            height: "60px",
            borderRadius: "10px",
            marginTop: "-100px",
            background: "rgb(73, 81, 100)",
            // marginLeft: "1215px",
            fontWeight: "bold",
            fontSize: "20px",
            // marginLeft: "auto",
            // marginzRight: "auto",
            
          }}
        >
          <a
            style={{
              textDecoration: "none",
              color: "white",
            }}
            href="/addcomplaint"
          >
            Add Complaint
          </a>
        </button>
      </div>
    );
  }
}
export default withRouter(ComplaintsList);
