import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

// 어떤 개발자가 되고 싶나
class Page5 extends Component {
  render() {
    return (
      <div className="page-5">
        <ButtonBack className="to-top">
          <span className="fa fa-angle-double-up" aria-hidden="true"></span>
        </ButtonBack>
        <div className="container-fluid">
          <div className="page-5-content">
            {/* <h3>항상 발전</h3> */}
            <h4>오늘에 만족하지 않고 더 나은 내일을 위해
            <br />항상 스스로를 계발하는 개발자가 되고 싶습니다.</h4>
            <br />
            <br />
            <p className="running-emoji"> ᕕ( ᐛ )ᕗ </p>
            <div className="box"></div>
            {/*<p className="running-emoji"> __ ᕕ( ᐛ )ᕗ ______________</p>
            <p className="running-emoji"> __  ᕕ( ᐛ )ᕗ  ____________</p>
            <p className="running-emoji"> ___  ᕕ( ᐛ )ᕗ  ___________</p>
            <p className="running-emoji"> ____  ᕕ( ᐛ )ᕗ  __________</p>
            <p className="running-emoji"> _____  ᕕ( ᐛ )ᕗ  _________</p>
            <p className="running-emoji"> ______  ᕕ( ᐛ )ᕗ  ________</p>
            <p className="running-emoji"> _______  ᕕ( ᐛ )ᕗ  _______</p>
            <p className="running-emoji"> ________  ᕕ( ᐛ )ᕗ  ______</p>
            <p className="running-emoji"> _________  ᕕ( ᐛ )ᕗ  _____</p>
            <p className="running-emoji"> __________  ᕕ( ᐛ )ᕗ  ____</p>
            <p className="running-emoji"> ___________  ᕕ( ᐛ )ᕗ  ___</p>
            <p className="running-emoji"> ____________  ᕕ( ᐛ )ᕗ  __</p>
            <p className="running-emoji"> _____________  ᕕ( ᐛ )ᕗ  _</p>
            <p className="running-emoji"> ______________  ᕕ( ᐛ )ᕗ  </p> */}
          </div>
        </div>
        <ButtonNext className="to-bottom">
          <span className="fa fa-angle-double-down" aria-hidden="true"></span>
        </ButtonNext>
      </div>
    );
  }
}

export default Page5;
