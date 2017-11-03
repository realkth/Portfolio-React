import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

class Page3 extends Component {
  render() {
    return (
      <div className="page-3">
        <ButtonBack className="to-top">
          <span className="fa fa-angle-double-up" aria-hidden="true"></span>
        </ButtonBack>
          <div className="container">
            <div className="title-wrapper">
              <h1 className="project-title">Bond</h1>
              <p className="sub-text">그룹 생성이 가능한 SNS 서비스</p>
            </div>
            <div className="content-wrapper row">
              <div className="col-md-6 video-wrapper">
                <div className="embed-responsive embed-responsive-16by9 media">
                  <iframe title="project1" className="embed-responsive-item project-video" src="https://www.youtube.com/embed/gty0xzSBzRk" frameBorder="0" gesture="media" allowFullScreen />
                </div>
              </div>
              <div className="col-md-6">
                <ul className="info">
                  <li className="info-list">
                    <h4 className="content-title">개요</h4>
                    <p className="content-text-summary">
                      패스트캠퍼스 프론트엔드 개발 스쿨 수료 프로젝트로 백엔드 개발 스쿨 수료생과 함께 협업
                      Naver Band를 모티브로
                    </p>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">이 프로젝트로 배운 것들</h4>
                    <ul className="content-text-wil">
                      <li>백엔드와의 협업 경험</li>
                      <li>ff</li>
                      <li>3</li>
                      <li>4</li>
                    </ul>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">활용 기술</h4>
                    <ul className="content-text-stacks">
                      <li>Vue.js</li>
                      <li>Bulma</li>
                      <li>Axios</li>
                      <li>CSS</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="btn-wrapper">
              <div className="btn-group" role="group" aria-label="button group">
                <form action="https://github.com/realkth/Bond">
                  <button type="submit" className="btn btn-info-link btn-outline-dark">
                    <span className="fa fa-github" aria-hidden="true"></span>
                    &nbsp;Github
                  </button>
                </form>
                <form action="http://bond.thekym.com">
                  <button type="submit" className="btn btn-info-link btn-outline-dark">
                    <span className="fa fa-globe" aria-hidden="true"></span>
                    &nbsp;Web Site
                  </button>
                </form>
                <form action="https://docs.google.com/spreadsheets/d/19uk0yIWIGAGDWxCyIE3sBjMY3eeNxImAGhN5P_W6S3M/edit?usp=sharing">
                  <button type="submit" className="btn btn-info-link btn-outline-dark">
                    <span className="fa fa-pencil-square-o" aria-hidden="true"></span>
                    &nbsp;Daily Scrum
                  </button>
                </form>
                <form action="https://youtu.be/gty0xzSBzRk">
                  <button type="submit" className="btn btn-info-link btn-outline-dark">
                    <span className="fa fa-youtube-play" aria-hidden="true"></span>
                    &nbsp;Youtube
                  </button>
                </form>
            </div>
          </div>
        </div>
          <ButtonNext className="to-bottom">
            <span className="fa fa-angle-double-down" aria-hidden="true"></span>
          </ButtonNext>
      </div>
    );
  }
}

export default Page3;
