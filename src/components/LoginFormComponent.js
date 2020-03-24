import React from 'react';
import NewUserFormComponent from './NewUserFormComponent';

class LoginFormComponent extends React.Component {

    render(){
        return (
           <div className="login-form-component">
                <form>
                    <label htmlFor="title">Username:</label>
                    <input 
                        type="text" 
                        id="title"
                        placeholder="Username" 
                    />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="*********"
                    />
                    <br /> 
                    <button className="general-button">Login</button>
                </form>
                <button className="link-button" onClick={() => this.props.changeMainView("signupForm")}>First time here? Create an account.</button>
            </div>
        )
    }
}

export default LoginFormComponent;