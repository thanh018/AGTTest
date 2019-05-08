import React, { Component } from 'react';
class Header extends Component {
    render() {
      return (
        <nav className="navbar navbar-default menu-block">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="" title="Logo">LOGO</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="">
                  <a title="About" href="">ABOUT</a>
                </li>
                <li>
                  <a title="What we do" href="">WHAT WE DO</a>
                </li>
                <li>
                  <a title="Team" href="">TEAM</a>
                </li>
              </ul>
              </div>
          </div>
          
        </nav>
      );
    }
  }
  
  export default Header;