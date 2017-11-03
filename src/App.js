import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

// import Navbar from './components/navbar';
// import Page1 from './components/page1';
// import Page2 from './components/page2';
// import Page3 from './components/page3';
// import Page4 from './components/page4';
// import Page5 from './components/page5';
// import Page6 from './components/page6';
import './App.css';

class App extends Component {
  offsetWidth() {
    if (window.document.body.offsetWidth < 768) {
      return <span className="touch-guide">터치하여 계속 보기</span>
    } else {
      return <span className="touch-guide">클릭하여 계속 보기</span>
    }
  };
  render() {
    return (
      <div className="App">
        <CarouselProvider
          visibleSlides={1}
          orientation="vertical"
          totalSlides={6}
          step={1}
          touchEnabled={false}
        >
          <Slider>
            <Slide index={0}>
              <div className="page-1">
                <div className="page-1-content">
                  <p className="page-1-p">안녕하세요!</p>
                  <h1>프론트엔드 개발자 <strong>김태훈</strong>의 <br />포트폴리오 웹사이트입니다.</h1>
                  <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">
                    <span className="fa fa-github " aria-hidden="true"></span>
                    &nbsp; Github</a></p>
                </div>
                <ButtonNext className="to-bottom">
                  {this.offsetWidth()}
                  <br />
                  <span className="fa fa-angle-double-down" aria-hidden="true"></span>
                </ButtonNext>
              </div>
            </Slide>

            <Slide index={1}>
              <div className="page-2">
                <ButtonBack className="to-top">
                  <span className="fa fa-angle-double-up" aria-hidden="true"></span>
                </ButtonBack>
                <div className="page-2-content">
                  <p className="page-2-p">2안녕하세요!</p>
                  <h1>프론트엔드 개발자 김태훈의 <br />포트폴리오 웹사이트입니다.</h1>
                  <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">
                    <span className="fa fa-github " aria-hidden="true"></span>
                    &nbsp; Github</a></p>
                </div>
                <ButtonNext className="to-bottom">
                  <span className="fa fa-angle-double-down" aria-hidden="true"></span>
                </ButtonNext>
              </div>
            </Slide>

            <Slide index={2}>
              <div className="page-3">
                <ButtonBack className="to-top">
                  <span className="fa fa-angle-double-up" aria-hidden="true"></span>
                </ButtonBack>
                <div className="container">
                  <div className="content-wrapper row">
                    <div className="col video-wrapper">
                      <div className="media">
                        <iframe title="project1" width="560" height="315" className="" src="https://www.youtube.com/embed/gty0xzSBzRk" frameBorder="0" gesture="media" allowFullScreen />
                      </div>
                    </div>
                  </div>
                </div >
                <ButtonNext className="to-bottom">
                  <span className="fa fa-angle-double-down" aria-hidden="true"></span>
                </ButtonNext>
              </div>
            </Slide>

            <Slide index={3}>
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
            </Slide>

            <Slide index={4}>
              <div className="page-5">
                <ButtonBack className="to-top">
                  <span className="fa fa-angle-double-up" aria-hidden="true"></span>
                </ButtonBack>
                <div className="page-5-content">
                  <h1>5더 알아보기</h1>
                  <p>나는 누구?</p>
                  <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">내 깃헙</a></p>
                </div>
                <ButtonNext className="to-bottom">
                  <span className="fa fa-angle-double-down" aria-hidden="true"></span>
                </ButtonNext>
              </div>
            </Slide>

            <Slide index={5}>
              <div className="page-6">
                <ButtonBack className="to-top">
                  <span className="fa fa-angle-double-up" aria-hidden="true"></span>
                </ButtonBack>
                <div className="page-6-content">
                  <h1>6더 알아보기</h1>
                  <p>나는 누구?</p>
                  <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">내 깃헙</a></p>
                </div>
              </div>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div >
    );
  }
}

export default App;