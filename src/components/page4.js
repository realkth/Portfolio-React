import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

// 프로젝트 내역
class Page4 extends Component {
  render() {
    return (
      <div className="page-4">
        <ButtonBack className="to-top-project">
          <span className="fa fa-angle-double-up" aria-hidden="true"></span>
        </ButtonBack>
        <div className="container-fluid">
          <div className="title-wrapper">
            <h2 className="project-title">Mood</h2>
            <h4 className="sub-title">하루의 감정을 기록하는 다이어리</h4>
          </div>
          <div className="content-wrapper row">
            <div className="col-md-6 video-wrapper">
              <div className="embed-responsive embed-responsive-16by9 media">
                <iframe title="project2" src="https://www.youtube.com/embed/k8K98UBskyA" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="btn-wrapper">
                <div className="btn-group" role="group" aria-label="button group">
                  <form action="https://github.com/realkth/mood" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-github" aria-hidden="true"></span>
                      &nbsp;Github
                  </button>
                  </form>
                  <form action="https://mood-vuex.firebaseapp.com/" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-globe" aria-hidden="true"></span>
                      &nbsp;Web Site
                  </button>
                  </form>
                  <form action="https://docs.google.com/spreadsheets/d/1i7tOWOv7eNiqQlEGzf7wO5ybKPk8lishXqrKqkRDrzU/edit?ts=59b76c7c#gid=0" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-pencil-square-o" aria-hidden="true"></span>
                      &nbsp;Daily Scrum
                  </button>
                  </form>
                  <form action="https://youtu.be/k8K98UBskyA" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-youtube-play" aria-hidden="true"></span>
                      &nbsp;Youtube
                  </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="info">
                <li className="info-list">
                  <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 개요</h5>
                  <p className="content-text-summary fa fa-angle-right" aria-hidden="true"> 프론트엔드 개발 스쿨 수료 후 지난 프로젝트에서 부족했던 부분들을 보충하고자 시작한 프로젝트입니다. 달력에 감정을 선택해 일기를 작성하는 다이어리 서비스입니다. 기본적인 다이어리 기능과 매달 기록한 감정 횟수의 통계 시각화 기능을 제공합니다.
                    </p>
                </li>
                <li className="info-list">
                  <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 주요 역할</h5>
                  <ul className="content-text-wil">
                    <li className="fa fa-check" aria-hidden="true"> Vue.js, Vuex와 Scss를 활용한 프론트엔드 작업</li><br />
                    <li className="fa fa-check" aria-hidden="true"> Axios를 이용한 데이터 통신</li><br />
                    <li className="fa fa-check" aria-hidden="true"> Firebase를 활용해 데이터베이스, 배포 등 서버단의 주요 역할 경험 </li><br />
                    <li className="fa fa-check" aria-hidden="true"> 스크럼보드와 깃헙 프로젝트, 이슈 메뉴를 활용한 프로젝트 일정 관리 </li>
                  </ul>
                </li>
                <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 활용 기술</h5>
                <p className="content-text-stacks fa fa-angle-right" aria-hidden="true"> <code>Vue.js</code> <code>Vuex</code> <code>Axios</code> <code>Scss</code> <code>Firebase</code>
                </p>
              </ul>
            </div>
          </div>
        </div>
        <ButtonNext className="to-bottom-project">
          <span className="fa fa-angle-double-down" aria-hidden="true"></span>
        </ButtonNext>
      </div>
    );
  }
}

export default Page4;
