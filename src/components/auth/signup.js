import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router';

class Signup extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (


       <div className="signup-parent">
     
        <div className="login-header clear row">

        <Link to='/' className="logo-link">
         <img src="style/images/logo-white.png" alt="Socio logo" className="logo" />
        </Link>
        <div className="login-nav-buttons">
            <span className="login-account-text">
                <label>Already a member?</label>
            </span>         
          <Link className="btn btn-ghost btn-signup" to="/signin">Sign In</Link>        
        </div>
      </div>

          
        <content>
         <div className="login-form-parent">
        <div className="account-title-parent ion-log-in">
          <h1 className="account-title account-title-login">Sign Up</h1>
          </div>
        

      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
        <div className="account-form-ico ion-ios-email">
          <input className="form-control" {...email} placeholder="Email"/>
          </div>
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
        <div className="account-form-ico ion-locked">
          <input className="form-control" {...password} type="password" placeholder="Password"/>
        </div>
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
        <div className="account-form-ico ion-locked">
          <input className="form-control" {...passwordConfirm} type="password" placeholder="Confirm Password"/>
          </div>
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-full btn-signin">Sign Up</button>
      </form>
      </div>
        </content>
      </div>






    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
