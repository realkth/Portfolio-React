import React, { Component } from 'react';

class Page1 extends Component {
  render() {
    return (
      <div className="page-1">
        <div className="page-1-content">
          <h1>안녕 친구들!</h1>
          <p>나는 누구인가 나는 누구인가 ㅠㅠ</p>
          <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">
            <span className="fa fa-github " aria-hidden="true"></span>
            &nbsp; Github</a></p>
        </div>
        <button className="to-bottom">
          <span>스크롤하여 계속 보기</span>
          <br />
          <span className="fa fa-arrow-down" aria-hidden="true"></span>
        </button>
      </div>
    );
  }
}

export default Page1;
