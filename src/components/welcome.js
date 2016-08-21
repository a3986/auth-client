import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


/*export default () => <div>Welcome to our slice of paradise</div>;*/


class Welcome extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return <li className="nav-item">
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </li>
    } else {
      // show a link to sign in or sign up
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
     /* <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
  */

  
           <div className="hero-text-box">
               <h1>Goodbye junk food.<br />Hello super healthy meals.</h1>
               <a className="btn btn-full" href="#">I'm hungry</a>
               <a className="btn btn-ghost" href="#">Show me more</a>
           </div>  
  

    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Welcome);
/*
  

*/
