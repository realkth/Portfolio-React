import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <div className="page-1">
        <div className="page-1-content">
          <h1>안녕 친구들!</h1>
          <p>나는 누구인가 나는 누구인가 ㅠㅠ</p>
          <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">내 깃헙</a></p>
        </div>
        <button type="button" className="btn btn-default" aria-label="아래로 스크롤">
          <span className="glyphicon glyphicon-chevron-down"></span>
        </button>
      </div>
    );
  }
}

export default Jumbotron;
