import React, { Component } from "react";
import { login } from "../ajax/auth";
import { Redirect } from "react-router-dom";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      email: "",
      password: "",
      errors: null,
    }
  }

  handleChange = (e) => {
    const newStateObj = {};
    newStateObj[e.target.name] = e.target.value;
    const newState = Object.assign(this.state, newStateObj);
    this.setState(newState);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = await login(this.state);


    //if the login route returns a token, set the token in user's local storage and redirect to root
    if(data.token){
      localStorage.setItem("JWT_TOKEN", data.token);
      this.props.setUser(data.user)
      this.setState({
        redirect: true,
      })
    //if login fails, token will be null and server will return error messages - display errors
    }else{
      console.log(data)
      this.setState({
        errors: data.errors,
      })
    }
  }

  render() {
    return (
      <div className="default-flex-column-container">
        <div className="login-container" >
          { this.state.redirect && <Redirect to="/" /> }
          <section className="login" id="login">
            <header>
              <h2>Rental App</h2>
              <h4>Login</h4>
            </header>
            <form className="login-form" onSubmit={this.handleSubmit }>
              <input
               type="text"
               name="email"
               value={this.state.email}
               onChange={this.handleChange}
               className="login-input"
               placeholder="Email"
               required
               autofocus/>
              <input
               type="password"
               name="password"
               value={this.state.password}
               onChange={this.handleChange}
               className="login-input"
               placeholder="Password"
               required />
              <div className="submit-container">
                <input type="submit" value="LogIn" className="login-button"/>
              </div>
            </form>
          </section>
        </div>
      </div>
    )
  }
}

export default Login