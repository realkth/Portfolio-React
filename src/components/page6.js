import React, { Component } from 'react';
import { ButtonBack, Dot } from 'pure-react-carousel';

// 연락처
class Page6 extends Component {
  render() {
    return (
      <div className="page-6">
        <ButtonBack className="to-top">
          <span className="fa fa-angle-double-up" aria-hidden="true"></span>
        </ButtonBack>
        <div className="container-fluid">
          <div className="page-6-content">
            <h1>6더 알아보기</h1>
            <p>나는 누구?</p>
            <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">
              <span className="fa fa-github " aria-hidden="true"></span>
              &nbsp; Github</a></p>
          </div>
        </div>
        <Dot slide={0} className="to-first">
          <span className="touch-guide">처음페이지로</span>
          <br />
          <span className="fa fa-step-backward" aria-hidden="true"></span>
        </Dot>
      </div>
    );
  }
}

export default Page6;
