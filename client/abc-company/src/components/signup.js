import React, { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone_num: "",
      password: "",
      role: "",

      firstnameError: "",
      lastnameError: "",
      phoneError: "",
      emailError: "",
      passwordError: "",
      roleError: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validate = () => {
    let firstnameError = "";
    let lastnameError = "";
    let phoneError = "";
    let emailError = "";
    let passwordError = "";
    let roleError = "";
    if (!this.state.first_name) {
      firstnameError = "first name is required";
    }
    if (!this.state.last_name) {
      lastnameError = "last name is required";
    }
    if (!this.state.email) {
      emailError = "Email is required";
    }

    if (!this.state.phone_num) {
      phoneError = "phone number is required";
    }

    if (!this.state.password) {
      passwordError = "password is required";
    }

    if (!this.state.role) {
      roleError = "role is required";
    }

    if (
      firstnameError ||
      lastnameError ||
      emailError ||
      phoneError ||
      passwordError ||
      roleError
    ) {
      this.setState({
        firstnameError,
        lastnameError,
        emailError,
        phoneError,
        passwordError,
        roleError,
      });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
  };

  onSubmit() {
    const user = {
      firstname: this.state.first_name,
      lastname: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone_num,
      password: this.state.password,
      role: this.state.role,
    };
    console.log("first name from signup onsubmit", user.firstname);
    console.log("user info from signup", user);
    axios
      .post("http://localhost:8000/signup", user)
      .then((res) => {
        window.location = "/signin";
        console.log("useeer signup", user);
      })
      .catch((err) => console.log(err));
  }

  onClick(event) {
    event.preventDefault();
    this.onSubmit(this.state.value);
    this.handleSubmit(this.state.value);
  }

  render() {
    return (
      <div id="formsignup">
        <form name="contactform" className="contactform">
          <div className="col-md-6">
            <label for="txtFirst">First Name</label>
            <input
              required={true}
              className="first"
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.setState.first_name}
              style={{ marginLeft: "25px" }}
            />
            <span style={{ color: "red" }}>{this.state.emailError}</span>
            <br />
            <label for="txtLast">Last Name</label>
            <input
              required={true}
              className="last"
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.setState.last_name}
              style={{ marginLeft: "25px" }}
            />
            <span style={{ color: "red" }}>{this.state.emailError}</span>
            <br />
            <label for="txtEmail">User Email</label>
            <input
              required={true}
              className="email"
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.setState.email}
              style={{ marginLeft: "22px" }}
            />
            <span style={{ color: "red" }}>{this.state.emailError}</span>
            <br />
            <label for="txtPhone">Mobile Number</label>
            <input
              required={true}
              className="phone"
              type="text"
              name="phone_num"
              placeholder="Mobile Number"
              onChange={this.handleChange}
              value={this.setState.phone_num}
              style={{ marginLeft: "-7px" }}
            />
            <span style={{ color: "red" }}>{this.state.phoneError}</span>
            <br />
            <label for="txtPass">Password</label>
            <input
              required={true}
              className="pass"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.setState.password}
              style={{ marginLeft: "35px" }}
            />
            <span style={{ color: "red" }}>{this.state.passwordError}</span>
            <br />
            <label>Role</label>
            <select
              required={true}
              name="role"
              style={{ marginLeft: "60px", width: "150px", height: "25px" }}
              onChange={this.handleChange}
              value={this.setState.role}
              style={{ marginLeft: "65px" }}
            >
              <option></option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
            <br />
            <input
              style={{
                width: "100px",
                height: "40px",
                marginTop: "25px",
                marginLeft: "170px",
                color: "white",
                background: "#074455",
                fontWeight: "bold",
              }}
              type="button"
              value="Sign up"
              onClick={this.onClick}
            />

            <p>
              <a
                style={{ textDecoration: "none", marginLeft: "150px" }}
                href="/signin"
              >
                I have account !
              </a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
