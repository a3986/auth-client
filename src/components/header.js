import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return <li className="nav-item">
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </li>
    } else {
      // show a link to sign in or sign up
      return [
        /*<li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>*/

        <li className="nav-item" key={1}>
          <Link className="btn btn-full" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="btn btn-ghost" to="/signup">Sign Up</Link>
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

  <header>
            <nav>
                <div className="row">
                    <img src="style/images/logo-white.png" alt="Socio logo" className="logo" />
                    <img src="style/images/logo-black.png" alt="Socio logo" className="logo-black" />
                    <ul className="main-nav">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
            <div className="hero-text-box">
                <h1>Goodbye paperwork.<br />Hello hassle free maintenance.</h1>
                <ul className="nav navbar-nav">
                {this.renderLinks()}
                </ul>
               
            </div>            
        </header>

    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
/* <a className="btn btn-full" href="#">Sign In</a>
                <a className="btn btn-ghost" href="#">Sign Up</a>
                */