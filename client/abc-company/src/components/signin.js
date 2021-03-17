import React from "react";
import axios from "axios";
import "../App.css";

export default class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      email: "",
      password: "",
      role: "",
      emailError: "",
      passwordError: "",
      roleError: "",
    };
  }

  handleValidation() {
    let emailError = "";
    let passwordError = "";
    let roleError = "";
    if (!this.state.email) {
      emailError = "email is required";
    }

    if (!this.state.password) {
      passwordError = "password is required";
    }
    if (!this.state.role) {
      passwordError = "password is required";
    }

    if (emailError || passwordError || roleError) {
      this.setState({
        emailError,
        passwordError,
        roleError,
      });
      return false;
    }
    return true;
  }

  handleSubmit = (event) => {
    const isValid = this.handleValidation();
    if (isValid) {
      console.log(this.state);
    }
  };

  onClick(event) {
    event.preventDefault();
    this.onSubmit(this.state.value);
    this.handleSubmit(this.state.value);
  }

  onSubmit() {
    const user = {
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    };
    console.log("user from onsubmit signin ", user);
    axios
      .post("http://localhost:8000/signin", user)
      .then((res) => {
        window.localStorage.setItem("token", res.data.accessToken);
        window.localStorage.setItem("email", user.email);
        window.localStorage.setItem("role", user.role);
        if (user.role === "customer") {
          window.location = "/allcomplaintCustomer";
        } else {
          window.location = "/complaintadmin";
        }
      })
      .catch((err) => alert("wrong email or password"));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <div
          class="formLogin"
          style={{
            height: "450px",
            borderRadius: "5px",
            backgroundColor: "#f2f2f2",
          }}
        >
          <form name="contactform" className="contactform">
            <div className="col-md-6">
              <label for="txtEmail">User Email</label>
              <input
                required={true}
                className="email"
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                value={this.setState.email}
                style={{ marginTop: "50px" }}
              />
              <span style={{ color: "red" }}>{this.state.emailError}</span>
              <br />
              <label for="txtEmail">Password</label>
              <input
                required={true}
                className="password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.setState.password}
                style={{ marginLeft: "30px" }}
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
              >
                <option></option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
              </select>
              <span style={{ color: "red" }}>{this.state.roleError}</span>
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
                value="Login"
                onClick={this.onClick}
              />
              <p>
                <a
                  style={{ textDecoration: "none", marginLeft: "150px" }}
                  href="/signup"
                >
                  I don't have account !
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
