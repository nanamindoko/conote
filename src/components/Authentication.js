import React from 'react';
import PropTypes from 'prop-types'

class Authentication extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleLogin() {
        let id = this.state.username;
        let pw = this.state.password;

        this.props.onLogin(id, pw).then(
            (success) => {
                if(!success) {
                    this.setState({
                        password: ''
                    });
                }
            }
        )
    }

    handleRegister() {
        let id = this.state.username;
        let pw = this.state.password;

        this.props.onRegister(id, pw).then(
            (result)=> {
                if(!result) {
                    this.setState({
                        username: '',
                        password: ''
                    })
                }
            }
        )
    }

    handleKeyPress(e) {
        if(e.charCode === 13) {
            if(this.props.mode) {
                this.handleLogin();
            } else {
                this.handleRegister();
            }
        }
    }

    render() {

        const inputBoxes = (
            <div>
                <div className="form-group">
                    <label for="usr">Username</label>
                    <input
                        name="username"
                        type="text"
                        className="validate form-control"
                        id="usr"
                        onChange={this.handleChange}
                        value={this.state.username}/>
                </div>

                <div className="form-group">
                    <label for="pwd">Password</label>
                    <input
                        name="password"
                        type="password"
                        className="validate form-control"
                        id="pwd"
                        onChange={this.handleChange}
                        value={this.state.password}
                        onKeyPress={this.handleKeyPress}/>
                </div>
            </div>
        );

        const loginView = (
          <div className="col">
              <h2>Sign In</h2>
              {inputBoxes}
              <button className="btn btn-primary" type="button" onClick={this.handleLogin}>SUBMIT</button>
          </div>
        );

        const registerView = (
          <div className="col">
              <h2>Register</h2>
              {inputBoxes}
              <button className="btn btn-primary" type="button" onClick={this.handleRegister}>CREATE ACCOUNT</button>
          </div>
        );

        return (
            <div className="container auth">
                <div className="row">
                    {this.props.mode ? loginView : registerView}
                </div>
            </div>
        );
    }
}

Authentication.propTypes = {
    mode: PropTypes.bool,
    onLogin: PropTypes.func,
    onRegister: PropTypes.func
};

Authentication.defaultProps = {
    mode: true,
    onLogin: (id, pw) => { console.error("login function not defined"); },
    onRegister: (id, pw) => { console.error("register function not defined"); }
};

export default Authentication;