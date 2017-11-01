import React, { Component } from 'react';

class Page2 extends Component {
  render() {
    return (
      <div className="page-2">
        {/* <div className="page-2-content">
          <h1>안녕 친구들!</h1>
          <p>나는 누구인가 나는 누구인가 ㅠㅠ</p>
          <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">내 깃헙</a></p>
        </div> */}
        {/* <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" width={560} height={315} src="https://www.youtube.com/embed/k8K98UBskyA" frameBorder={0} allowFullScreen />
        </div> */}
        <div className="container">
          <h1 className="">Bond</h1>
          <p className="sub-text">그룹 생성이 가능한 SNS 서비스</p>
          <div className="content-wrapper row">
            <div className="col video-wrapper">
              <div className="media">
                <iframe title="project1" width="560" height="315" className="" src="https://www.youtube.com/embed/gty0xzSBzRk" frameBorder="0" gesture="media" allowFullScreen />
              </div>
              </div>
            </div>
            <div className="col">
              <ul className="info">
                <li className="info-list">
                  <h4 className="content-title">팀 구성원</h4>
                  <ul className="content-text">
                    <li>Frontend - 고세민, 김태훈, 한성욱</li>
                    <li>Backend - 김기홍, 김영민, 이다함</li>
                  </ul>
                </li>
                <li className="info-list">
                  <h4 className="content-title">주요 기능</h4>
                  <p className="content-text">회원가입, 로그인, 내 정보 수정, 그룹 개설/삭제, 그룹 가입/탈퇴, 그룹 검색, 그룹 글 등록 및 삭제(글, 사진), 그룹 새 글 모아보기, 내 글 모아보기, 팔로우 기능, 팔로잉/팔로워 리스트  </p>
                </li>
                <li className="info-list">
                  <h4 className="content-title">서비스 환경</h4>
                  <p className="content-text">IE 10+ 이상, 반응형</p>
                </li>
                <li className="info-list">
                  <h4 className="content-title">업무 분담 및 협업 방안</h4>
                  <p className="content-text">기능별 분담, git 을 활용한 버전 관리, 페어 프로그래밍, 작업 분담은 깃헙의 프로젝트 메뉴를 활용해서 관리, 작업 일정은 스크럼보드를 통해 관리</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        );
  }
}

export default Page2;
