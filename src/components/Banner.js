import React, { Component } from 'react';
class Banner extends Component {
    render() {
      return (
        <div className="banner-block">
          <div className="">
            <div className="banner-content container">
                <h1 className="banner-title">SECURE DATA MANAGEMENT</h1>
                <span className="banner-subtitle">Clarity from Complexity</span>
                <a className="btn-green btn-what-we-do">WHAT WE DO</a>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Banner;