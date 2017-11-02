import React, { Component } from 'react';
// intro
class Page1 extends Component {
  render() {
    return (
      <div className="page-1">
        <div className="page-1-content">
          <p className="page-1-p">안녕하세요!</p>
          <h1>프론트엔드 개발자 김태훈의 <br />포트폴리오 웹사이트입니다.</h1>
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
