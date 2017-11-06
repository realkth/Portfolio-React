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
        <div className="container">
          <div className="title-wrapper">
            <h2 className="project-title">Mood</h2>
            <h4 className="sub-title">하루의 감정을 기록 할 수 있는 다이어리</h4>
          </div>
          <div className="content-wrapper row">
            <div className="col-md-8 mx-auto video-wrapper">
              <div className="embed-responsive embed-responsive-16by9 media">
                <iframe title="project2" src="https://www.youtube.com/embed/k8K98UBskyA" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
            <div className="col-md-12">
              <ul className="info">
                <li className="info-list">
                  <h5 className="content-title">개요</h5>
                  <p className="content-text-summary">
                    패스트캠퍼스 프론트엔드 개발 스쿨 4기 수료 후 지난 프로젝트에서 부족했던 부분들을 보충하고자 시작한 프로젝트입니다. 파이어베이스를 활용해 회원가입 및 로그인, 데이터베이스를 구현했으며 배포까지 진행했습니다.
                    </p>
                </li>
                <li className="info-list">
                  <h5 className="content-title">이 프로젝트로 배운 것들</h5>
                  <ul className="content-text-wil">
                    <li>백엔드 개발자와의 협업 경험</li>
                    <li>Axios를 이용한 데이터 통신</li>
                    <li></li>
                  </ul>
                </li>
                <h5 className="content-title">활용 기술</h5>
                <p className="content-text-stacks">
                  Vue.js, Vuex, Axios, Scss
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

export default Page4;
