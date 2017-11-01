import React, { Component } from 'react';
// import { Parallax } from "react-parallax";
import Parallax from 'react-springy-parallax'

class Page3 extends Component {
  render() {
    return (
      <Parallax ref="parallax" pages={3}>

        <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: 'red' }} />
        <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: 'yellow' }} />
        <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: 'green' }} />
        
        <div className="page-3">
          <div className="page-3-content">
            <h1>안녕 친구들!난 3번이야</h1>
            <p>나는 누구인가 나는 누구인가 ㅠㅠ</p>
            <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">내 깃헙333</a></p>
          </div>
          {/* <button type="button" className="btn btn-default to-bottom" aria-label="아래로 스크롤">
          <span className="glyphicon glyphicon-chevron-down"></span>
        </button> */}
        </div>
      </Parallax>
    );
  }
}

export default Page3;
