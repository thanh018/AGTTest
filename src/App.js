import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import SectionText from './components/SectionText';
import SectionMac from './components/SectionMac';
import SectionIpad from './components/SectionIpad';
import FooterTop from './components/FooterTop';
import FooterBottom from './components/FooterBottom';
class App extends Component {  
  render() {
    return (
        <div className="render-wrapper agt-test">
          <div className="">
            <Header />
            <Banner />
            <SectionText/>
            <SectionMac/>
            <SectionIpad/>
            <FooterTop />
            <FooterBottom />
          </div>
        </div>
    );
  }
}

export default App;
