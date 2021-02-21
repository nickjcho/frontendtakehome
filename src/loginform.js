import React from 'react';
import ReactDOM from 'react-dom';
import resetpwd2 from './resetpwd2.png'
import signup from './signup.png'

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' ,                         //username entered in form
                     password: '',                          //password entered in form
                     incomplete_message: '',                //error message for empty username input
                     incorrect_password_message: '',        //error message for incorrect password
                     nameinput_color: '#c9c7c7',            //border color of username input
                     pwinput_color: '#c9c7c7',              //border color of password input
                     form_display: 'block',                 //display setting for form
                     success_display: 'none',               //display setting for login success screen
                     image: resetpwd2,                      //image filepath
                     text: 'Welcome to BlueBear Boba!',     //header text
                     correct_username: 'Boba Bear',         //correct username, hardcoded as 'Boba Bear'
                     correct_password: 'bobaislife'};       //correct password, hardcoded as 'bobaislife'
    }
    SubmitHandler = (event) => {
        event.preventDefault();
        //If username input is empty or > 40 characters, add in error message/color change and void any password error message
        var user = this.state.username;
        if (this.state.username == '')
        {
            this.setState({incomplete_message: 'Field left incomplete!'});
            this.setState({nameinput_color: '#DD0000'});
            this.setState({incorrect_password_message: ''});
            this.setState({pwinput_color: '#c9c7c7'});
        } 
        //If password is not correct, add in error message/color change and void any username error message
        if (this.state.password != this.state.correct_password && this.state.username != '')
        {
            this.setState({incorrect_password_message: 'Password is incorrect!'});
            this.setState({pwinput_color: '#DD0000'});
            this.setState({incomplete_message: ''});
            this.setState({nameinput_color: '#c9c7c7'});
        }
        //If username and password are correct, hide form, show success message and change image/header
        if (this.state.password == this.state.correct_password && this.state.username == this.state.correct_username) 
        {
            this.setState({form_display: 'none'});
            this.setState({success_display: 'block'});
            this.setState({image: signup});
            this.setState({text: 'Password Accepted'});
        }
    }
    //Update username and password state as they are entered
    updateUsername = (event) => {
        this.setState({username: event.target.value});
    }
    updatePassword = (event) => {
        this.setState({password: event.target.value});
    }
    render() {
      return (
        <div class='form-wrapper'>
            <div class='form-image'>
                <img src={this.state.image}/>
            </div>
            <div>
                <h1 class='title-text'>{this.state.text}</h1>
            </div>
            <form onSubmit={this.SubmitHandler}
                class='login-form' 
                style={{display:this.state.form_display}}>
            <table class='form-table'>
                <tr>
                <input onChange={this.updateUsername}
                    class='input'
                    type='text'
                    placeholder='Your name (maximum 40 characters)'
                    style={{borderColor:this.state.nameinput_color}}
                />
                </tr>
                <tr class='error-message'>
                    <small>{this.state.incomplete_message}</small>
                </tr>
                <tr>
                <input onChange={this.updatePassword}
                    class='input'
                    type='password'
                    placeholder='Enter password'
                    style={{borderColor:this.state.pwinput_color}}
                />
                </tr>
                <tr class='error-message'>
                    <small>{this.state.incorrect_password_message}</small>
                </tr>
                <tr>
                <input
                    class='send'
                    type='submit'
                    value='Send'
                />
                </tr>
            </table>
            </form>
            <div style={{display:this.state.success_display}}>
                <p class='thanks'>Thank you, <span>{this.state.username}</span>!</p>
            </div>
        </div>
      );
    }
  }

  export default LoginForm;