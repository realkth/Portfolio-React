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
            <h2 className="project-title">Bond</h2>
            <h4 className="sub-title">그룹 기반 SNS</h4>
          </div>
          <div className="content-wrapper row">
            <div className="col-md-8 mx-auto video-wrapper">
              <div className="embed-responsive embed-responsive-16by9 media">
                <iframe title="project1" className="embed-responsive-item project-video" src="https://www.youtube.com/embed/gty0xzSBzRk" frameBorder="0" gesture="media" allowFullScreen />
              </div>
            </div>
            <div className="col-md-8 mx-auto">
              <ul className="info">
                <li className="info-list">
                  <h5 className="content-title">개요</h5>
                  <p className="content-text-summary">
                    패스트캠퍼스 프론트엔드 개발 스쿨 수료 프로젝트로 백엔드 개발 스쿨 수료생과 함께 네이버 Band를 모티브로 그룹 생성과 팔로우 기능이 있는 SNS서비스 제작
                    </p>
                </li>
                <li className="info-list">
                  <h5 className="content-title">이 프로젝트로 배운 것들</h5>
                  <ul className="content-text-wil">
                    <li>백엔드 개발자와의 협업 경험</li>
                    <li>Axios를 이용한 데이터 통신</li>
                    <li>프로젝트 진행 과정 및 일정 관리 방법</li>
                    <li></li>
                  </ul>
                </li>
                <h5 className="content-title">활용 기술</h5>
                <p className="content-text-stacks">
                  Vue.js, Axios, Bulma, Sass
                </p>
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
