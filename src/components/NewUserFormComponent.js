import React from 'react';

class NewUserFormComponent extends React.Component {

    state={
        usernameInput: "", 
        passwordInput: ""
     }
 
     handleChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value
       });
     }
 
     handleSubmit = (event) => {
        event.preventDefault();
        let encodedPasswordInput = btoa(this.state.passwordInput);
        this.props.handleUserCreation(this.state.usernameInput, encodedPasswordInput);
     }
 
     render(){
         return (
            <div className="new-user-form-component">
                <h1>Create an account:</h1>
                 <form onSubmit={(event) => this.handleSubmit(event, this.state)}>
                     <label htmlFor="username">Username:</label>
                     <input 
                     className="new-user-form-input"
                         type="text" 
                         name="usernameInput"
                         placeholder="Username"
                         value={this.state.usernameInput}
                         onChange={this.handleChange}
                     />
                     <br />
                     <label htmlFor="password">Password:</label>
                     <input 
                     className="new-user-form-input"
                         type="password"
                         name="passwordInput" 
                         placeholder="••••••••"
                         value={this.state.passwordInput}
                         onChange={this.handleChange}
                     />
                     <br /> 
                     <input type="submit" className="primary-button" id="general" value="Submit"/>
                 </form>
                 <button className="link-button" onClick={() => this.props.changeMainView("loginForm")}>Already have an account? Login here.</button>
             </div>
         )
     }
}

export default NewUserFormComponent;