import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginForm from './loginform.js'
import reportWebVitals from './reportWebVitals';


class LoginPage extends React.Component {
  render() {
    return (
      <div class='login-page'>
        <LoginForm />;
      </div>
    )
  }
}
ReactDOM.render(<LoginPage />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
