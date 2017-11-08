import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import Typed from 'typed.js';

class Page2 extends Component {
  componentDidMount() {
    const options = {
      strings: [
        "HTML5", "CSS3", "Vue.js", "React", "JavaScript", "ES6", "jQuery"
      ],
      typeSpeed: 150,
      startDelay: 500,
      backSpeed: 100,
      backDelay: 1300,
      loop: true,
    }
    this.typed = new Typed(this.el, options);
  }
  // 메모리 누수 방지
  componentWillUnmount() {
    this.typed.destroy();
  }
  render() {
    return (
      <div className="page-2">
        <ButtonBack className="to-top">
          <span className="fa fa-angle-double-up" aria-hidden="true"></span>
        </ButtonBack>
        <div className="container-fluid">
          <div className="page-2-content">
            <h4 className="page-2-h4">저는 &nbsp;
            <strong id="typed" style={{ whiteSpace: "pre" }} ref={(el) => { this.el = el; }}></strong>할 줄 아는 <strong></strong>프론트엔드 개발자입니다.</h4>
          </div>
        </div>
        <ButtonNext className="to-bottom">
          <span className="fa fa-angle-double-down" aria-hidden="true"></span>
        </ButtonNext>
      </div>
    );
  }
}

export default Page2;
