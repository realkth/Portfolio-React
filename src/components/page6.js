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
            <h1 className="h1-p6">더 알아보기</h1>
            <p><span className="fa fa-envelope" aria-hidden="true"></span> <a className="email" href="mailto:miamirocky@gmail.com"> miamirocky@gmail.com</a></p>
            <p className="more-contact"> 이메일로 연락주시면 상세한 이력서 보내드리겠습니다.<br /> 당신과 함께 성장하고 싶습니다.</p>
            <p><a className="btn btn-dark btn-sm" href="https://drive.google.com/file/d/1QKHYW7chyCMqBYJicGGsJihjcLueDlIi/view?usp=sharing" role="button" target="_blank">
              <span className=" fa fa-file-text" aria-hidden="true"></span>
              &nbsp; Résumé</a></p>
            {/* <p><a className="btn btn-dark btn-sm" href="https://github.com/realkth" role="button" target="_blank">
              <span className="fa fa-github " aria-hidden="true"></span>
              &nbsp; Github</a></p> */}
            {/* <a href="">이력서!</a> */}
          </div>
        </div>
        <Dot slide={0} className="to-first">
          <span className="touch-guide">처음 페이지로</span>
          <br />
          <span className="fa fa-step-backward" aria-hidden="true"></span>
        </Dot>
      </div>
    );
  }
}

export default Page6;
