import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password });
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
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <div className="login-parent">
     
        <div className="login-header clear row">

        <Link to='/' className="logo-link">
         <img src="style/images/logo-white.png" alt="Socio logo" className="logo" />
        </Link>
        <div className="login-nav-buttons">
            <span className="login-account-text">
                <label>Dont have an account?</label>
            </span>         
          <Link className="btn btn-ghost btn-signup" to="/signup">Sign Up</Link>        
        </div>
      </div>
          
        <content>
         <div className="login-form-parent">
        <div className="account-title-parent ion-log-in">
          <h1 className="account-title account-title-login">Sign In</h1>
          </div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
         <div className="account-form-ico ion-ios-email">
          <input {...email} className="form-control" placeholder="Email" />
         </div>
        </fieldset>
        <fieldset className="form-group">
         <div className="account-form-ico ion-locked">
          <input {...password} type="password" className="form-control" placeholder="Password"/>
          </div>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-full btn-signin">Sign In</button>
      </form>
      </div>
        </content>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
