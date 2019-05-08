import React, { Component } from 'react';
class FooterTop extends Component {
    render() {
      return (
        <div className="footer-top">
          <div className="container footer-top-inner">
            <a className="logo logo-footer" title="Logo" href="">LOGO</a>
            <ul className="list-store">
              <li className="store-item">
                <a title="App Store" href="">
                  <img className="img-responsive" src="../images/agt/app-store.png" alt="App Store" />
                </a>
              </li>
              <li className="store-item">
                <a title="Google Play" href="">
                  <img className="img-responsive" src="../images/agt/google-play.png" alt="CH play" />
                </a>
              </li>
              
            </ul>

            <ul className="list-social">
              <li className="social-item">
                <a title="Twitter" href="">
                  <img className="img-responsive" src="../images/agt/twitter-icon.png" alt="Twitter" />
                </a>
              </li>
              <li className="social-item">
                <a title="Facebook" href="">
                  <img className="img-responsive" src="../images/agt/fb-icon.png" alt="Facebook"/>
                </a>
              </li>

              <li className="social-item">
                <a title="Instagram" href="">
                  <img className="img-responsive" src="../images/agt/instagram-icon.png" alt="Instagram"/>
                </a>
              </li>
              
            </ul>
          </div>
          
        </div>
      );
    }
  }
  
  export default FooterTop;