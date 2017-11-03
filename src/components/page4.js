import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

// 프로젝트 내역
class Page4 extends Component {
  render() {
    return (
      <div className="page-4">
        <ButtonBack className="to-top">
          <span className="fa fa-angle-double-up" aria-hidden="true"></span>
        </ButtonBack>
        <div className="page-4-content">
          <h1>4더 알아보기</h1>
          <p>나는 누구?</p>
          <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">내 깃헙</a></p>
        </div>
        <ButtonNext className="to-bottom">
          <span className="fa fa-angle-double-down" aria-hidden="true"></span>
        </ButtonNext>
      </div>
    );
  }
}

export default Page4;
