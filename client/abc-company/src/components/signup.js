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
      phone_num: "",
      email: "",
      password: "",
      role: "",

      firstnameError: "",
      lastnameError: "",
      phoneError: "",
      emailError: "",
      passwordError: "",
      roleError : "",
    };
  }

  handleChange( e){         
    this.setState({ [e.target.name]: e.target.value });
}

  onClick(event) {
    event.preventDefault();
    this.onSubmit(this.state.value);
    this.handleSubmit(this.state.value);
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
        roleError
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
    const customer = {
      firstname: this.state.first_name,
      lastname: this.state.last_name,
      phone: this.state.phone_num,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    };
    axios
      .post("customer/addnewuser", customer)
      .then((res) => {
        window.location = "/loginCustomer";
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
        <div id='formsignup'>
            <form name="contactform" className="contactform" >
               <div className="col-md-6">
                  <label for="txtFirst">First Name</label>
                  <input required={true} className='first' type="text" name="first_name" placeholder="First Name" onChange={this.handleChange} value={this.setState.first_name}/>
                  <span style={{color: "red"}}>{this.state.emailError}</span>
                   <br/>
                  <label for="txtLast">Last Name</label>
                  <input required={true} className='last' type="text" name="last_name"  placeholder="Last Name" onChange={this.handleChange} value={this.setState.last_name}/>
                  <span style={{color: "red"}}>{this.state.emailError}</span>
                   <br/>
                  <label for="txtEmail">User Email</label>
                  <input required={true} className='email' type="text" name="email"  placeholder="Email" onChange={this.handleChange} value={this.setState.email}/>
                  <span style={{color: "red"}}>{this.state.emailError}</span>
                   <br/>
                         <label for="txtPass">Password</label>
                         <input  required={true} className='pass' type="password" name="password"  placeholder="Password" onChange={this.handleChange} value={this.setState.password}/>
                         <span style={{color: "red"}}>{this.state.passwordError}</span>
                         <br/>
                         <label>Role</label>
                         <select required={true} style={{marginLeft:'60px', width:'150px', height:'25px'}} oonChange={this.handleChange} value={this.setState.role}>
                            <option></option>
                            <option value="admin">Admin</option>
                            <option value="customer">Customer</option>
 
                         </select>
                         <br/>
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
                         {/* <input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/>
                         <br/> */}
                         <p>
                         <a style={{textDecoration:"none", marginLeft:'150px'}} href='/signup'>I don't have account !</a>
                         </p>
                   
                  </div>
      
              </form>
        </div>
    //   <div
    //     style={{
    //       width: "500px",
    //       height: "650px",
    //       border: "2px solid #4682B4E6",
    //       padding: "30px 30px 30px 30px",
    //       margin: "2% 0% 0% 35%",

    //       borderRadius: "10px",
    //     }}
    //   >
    //     <b
    //       style={{
    //         marginLeft: "100px",
    //         paddingBottom: "30px",
    //         color: "#4682B4",
    //       }}
    //     >
    //       sign up as an Admin?
    //       <a
    //         style={{
    //           textDecoration: "none",
    //           color: "#26468A",
    //         }}
    //         href="/signupA"
    //       >
    //         {" "}
    //         sign up{" "}
    //       </a>{" "}
    //     </b>
    //     <Form>
    //       <Form.Group controlId="formBasicEmail">
    //         <label
    //           style={{
    //             fontSize: "20px",
    //             paddingBottom: "5px",
    //           }}
    //         >
    //           First Name
    //         </label>
    //         <input
    //           required={true}
    //           name="firstname"
    //           value={this.setState.firstname}
    //           onChange={this.onChangeHandle}
    //           type="text"
    //           className="form-control"
    //           style={{
    //             height: "40px",
    //           }}
    //           placeholder="Enter First Name"
    //           aria-label="Recipient's username"
    //           aria-describedby="basic-addon2"
    //         />
    //         <div style={{ color: "red", fontSize: "15px" }}>
    //           {this.state.firstnameError}
    //         </div>
    //         <br></br>
    //       </Form.Group>

    //       <Form.Group controlId="formBasicEmail">
    //         <label
    //           style={{
    //             fontSize: "20px",
    //             paddingBottom: "5px",
    //           }}
    //         >
    //           Last Name
    //         </label>
    //         <input
    //           required={true}
    //           className="form-control col"
    //           name="lastname"
    //           value={this.setState.lastname}
    //           onChange={this.onChangeHandle}
    //           placeholder="Enter Last Name"
    //           type="text"
    //           style={{
    //             height: "40px",
    //           }}
    //           aria-label="Recipient's username"
    //           aria-describedby="basic-addon2"
    //         />
    //         <div style={{ color: "red", fontSize: "15px" }}>
    //           {this.state.lastnameError}
    //         </div>
    //         <br></br>
    //       </Form.Group>

    //       <Form.Group controlId="formBasicEmail">
    //         <label
    //           style={{
    //             fontSize: "20px",
    //             paddingBottom: "5px",
    //           }}
    //         >
    //           Phone No.
    //         </label>
    //         <input
    //           value={this.setState.phone}
    //           onChange={this.onChangeHandle}
    //           name="phone"
    //           placeholder="Enter Phone No."
    //           required={true}
    //           type="text"
    //           className="form-control"
    //           style={{
    //             height: "40px",
    //           }}
    //           aria-label="Recipient's username"
    //           aria-describedby="basic-addon2"
    //         />
    //         <div style={{ color: "red", fontSize: "15px" }}>
    //           {this.state.phoneError}
    //         </div>
    //         <br></br>
    //       </Form.Group>

    //       <Form.Group controlId="formBasicEmail">
    //         <label
    //           style={{
    //             fontSize: "20px",
    //             paddingBottom: "5px",
    //           }}
    //         >
    //           E-mail
    //         </label>
    //         <input
    //           required={true}
    //           className="form-control col"
    //           name="email"
    //           value={this.setState.email}
    //           onChange={this.onChangeHandle}
    //           placeholder="Enter E-mail"
    //           type="text"
    //           style={{
    //             height: "40px",
    //           }}
    //           aria-label="Recipient's username"
    //           aria-describedby="basic-addon2"
    //         />
    //         <div style={{ color: "red", fontSize: "15px" }}>
    //           {this.state.emailError}
    //         </div>
    //       </Form.Group>

    //       <Form.Group controlId="formBasicPassword">
    //         <label
    //           style={{
    //             fontSize: "20px",
    //             paddingBottom: "5px",
    //             paddingTop: "20px",
    //           }}
    //         >
    //           Password
    //         </label>
    //         <input
    //           required={true}
    //           type="password"
    //           className="form-control col"
    //           name="password"
    //           value={this.setState.password}
    //           onChange={this.onChangeHandle}
    //           placeholder=" Enter Password"
    //           style={{
    //             height: "40px",
    //           }}
    //           aria-label="Recipient's username"
    //           aria-describedby="basic-addon2"
    //         />
    //         <div style={{ color: "red", fontSize: "15px" }}>
    //           {this.state.passwordError}
    //         </div>
    //       </Form.Group>
    //       <input
    //         style={{
    //           width: "100px",
    //           height: "40px",
    //           borderRadius: "10px",
    //           marginTop: "40px",
    //           marginLeft: "170px",
    //           color: "white",
    //           background: "#26468A",
    //           fontWeight: "bold",
    //         }}
    //         type="button"
    //         value="Sign up"
    //         onClick={this.handleClick}
    //       />
    //     </Form>
    //     <b
    //       style={{
    //         marginLeft: "100px",
    //         paddingBottom: "30px",
    //         color: "#4682B4",
    //       }}
    //     >
    //       Already have an account?
    //       <a
    //         style={{
    //           textDecoration: "none",
    //           color: "#26468A",
    //         }}
    //         href="/loginC"
    //       >
    //         {" "}
    //         login{" "}
    //       </a>{" "}
    //     </b>
    //   </div>
    );
  }
}


