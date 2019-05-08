import React, { Component } from 'react';
class SectionText extends Component {
    render() {
      return (
        <div className="section-block section-text">
          <div className="container section-inner section-text-inner">
            <div className="section-left">
              <h1 className="section-title">Lorem Ipsum is simply dummy</h1>
              <p className="section-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <a className="btn-pink cta-link">
                CTA Link
                <img className="img-responsive" src="../images/agt/next.png" alt="Icon next" />
              </a>
            </div>
            <div className="section-right">
              <div className="image-block">
                <img className="img-responsive" src="../images/agt/image-1.png" alt=""/>
              </div>
            </div>
              
          </div>
        </div>
      );
    }
  }
  
  export default SectionText;