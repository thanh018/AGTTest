import React, { Component } from 'react';
class SectionMac extends Component {
    render() {
      return (
        <div className="section-block section-mac">
          <div className="container section-inner section-mac-inner">
              <div className="section-left">
                <div className="image-block">
                  <img className="img-responsive" src="../images/agt/image-2.png" alt=""/>
                </div>
              </div>
              <div className="section-right">
                <h1 className="section-title">Lorem Ipsum is simply dummy</h1>
                <p className="section-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div className="subtitle-block">
                  <p className="description">
                      <span>Lorem Ipsum is simply dummy text</span>
                      of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                  </p>

                  <img className="img-responsive" src="../images/agt/shape.png" alt=""/>
                </div>
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default SectionMac;