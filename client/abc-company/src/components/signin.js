import React from "react";
import axios from "axios";
import '../App.css'

export default class Signin extends React.Component {
    constructor(props){
       super(props);

    //    this.onChangeHandle = this.onChangeHandle.bind(this);
    //    this.handleClick = this.handleClick.bind(this);
  
       this.state = {
        email: "",
        password: "",
        role: "",
        emailError: "",
        passwordError: "",
        roleError: "",
       }
    }

    handleValidation(){
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
    
   onClick(event) {
    event.preventDefault();
    this.onSubmit(this.state.value);
    this.handleSubmit(this.state.value);
  }

  onSubmit() {
        const user = {
          email: this.state.email,
          password: this.state.password,
          role : this.state.role,
        };
        axios
          .post("/signin", user)
          .then((res) => {
            window.localStorage.setItem("token", res.data.token);
            window.localStorage.setItem("email", user.email);
            window.localStorage.setItem("user", user.role);
            window.location = "/home";
          })
          .catch((err) => alert("wrong email or password"));
      }

    handleChange( e){         
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return (
            <div class='formLogin'>           
               <form name="contactform" className="contactform" >
                    <div className="col-md-6">
                      
                         <label for="txtEmail">User Email</label>
                         <input required={true} className='email' type="text" size="30" name='email' placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.setState.email}/>
                         <span style={{color: "red"}}>{this.state.emailError}</span>
                         <br/>
                         <label for="txtPass">Password</label>
                         <input  required={true} className='pass' type="password" size="30" name='password' placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.setState.password}/>
                         <span style={{color: "red"}}>{this.state.passwordError}</span>
                         <br/>
                         <label>Role</label>
                         <select required={true} name='role' style={{marginLeft:'60px', width:'150px', height:'25px'}} onChange={this.handleChange.bind(this, "role")} value={this.setState.role}>
                            <option></option>
                            <option value="admin">Admin</option>
                            <option value="customer">Customer</option>
 
                         </select>
                         <span style={{color: "red"}}>{this.state.roleError}</span>
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
                         value="Login"
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
      )
    }
}

