import React, { Component } from 'react';
// import { Carousel } from 'react-responsive-carousel';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

// import Navbar from './components/navbar';
// import Page1 from './components/page1';
// import Page2 from './components/page2';
// import Page3 from './components/page3';
// import Page4 from './components/page4';
// import Page5 from './components/page5';
// import Page6 from './components/page6';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CarouselProvider
          visibleSlides={1}
          orientation="vertical"
          /* naturalSlideWidth={'100vw'}
          naturalSlideHeight={'100vh'} */
          totalSlides={6}
          step={1}
        >
          <Slider>

            <Slide index={0}>
              <div className="page-1">
                <div className="page-1-content">
                  <p className="page-1-p">안녕하세요!</p>
                  <h1>프론트엔드 개발자 김태훈의 <br />포트폴리오 웹사이트입니다.</h1>
                  <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">
                    <span className="fa fa-github " aria-hidden="true"></span>
                    &nbsp; Github</a></p>
                  <DotGroup className="indicator"></DotGroup>
                </div>
                <ButtonNext className="to-bottom">
                  <span>스크롤하여 계속 보기</span>
                  <br />
                  <span className="fa fa-arrow-down" aria-hidden="true"></span>
                </ButtonNext>
              </div>
            </Slide>

            <Slide index={1}>
              <div className="page-2">
                <ButtonBack className="to-top">
                  <span>스크롤하여 계속 보기</span>
                  <br />
                  <span className="fa fa-arrow-up" aria-hidden="true"></span>
                </ButtonBack>
                <div className="page-2-content">
                  <p className="page-2-p">안녕하세요!</p>
                  <h1>프론트엔드 개발자 김태훈의 <br />포트폴리오 웹사이트입니다.</h1>
                  <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">
                    <span className="fa fa-github " aria-hidden="true"></span>
                    &nbsp; Github</a></p>
                  <DotGroup className="indicator"></DotGroup>
                </div>
                <ButtonNext className="to-bottom">
                  <span>스크롤하여 계속 보기</span>
                  <br />
                  <span className="fa fa-arrow-down" aria-hidden="true"></span>
                </ButtonNext>
              </div>
            </Slide>

            <Slide index={2}>
              <div className="page-3">
                <ButtonBack className="to-top">
                  <span>스크롤하여 계속 보기</span>
                  <br />
                  <span className="fa fa-arrow-up" aria-hidden="true"></span>
                </ButtonBack>
                <div className="container">
                  <div className="content-wrapper row">
                    <div className="col video-wrapper">
                      <div className="media">
                        <iframe title="project1" width="560" height="315" className="" src="https://www.youtube.com/embed/gty0xzSBzRk" frameBorder="0" gesture="media" allowFullScreen />
                      </div>
                    </div>
                  </div>
                  <DotGroup className="indicator"></DotGroup>
                </div >
                <ButtonNext className="to-bottom">
                  <span>스크롤하여 계속 보기</span>
                  <br />
                  <span className="fa fa-arrow-down" aria-hidden="true"></span>
                </ButtonNext>
              </div>
            </Slide>

            <Slide index={3}>
              <div className="page-4">
                <ButtonBack className="to-top">
                  <span>스크롤하여 계속 보기</span>
                  <br />
                  <span className="fa fa-arrow-up" aria-hidden="true"></span>
                </ButtonBack>
                <div className="page-4-content">
                  <h1>더 알아보기</h1>
                  <p>나는 누구?</p>
                  <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">내 깃헙</a></p>
                  <DotGroup className="indicator"></DotGroup>
                </div>
                <ButtonNext className="to-bottom">
                  <span>스크롤하여 계속 보기</span>
                  <br />
                  <span className="fa fa-arrow-down" aria-hidden="true"></span>
                </ButtonNext>
              </div>
            </Slide>

            <Slide index={4}>
              <div className="page-5">
                <ButtonBack className="to-top">
                  <span>스크롤하여 계속 보기</span>
                  <br />
                  <span className="fa fa-arrow-up" aria-hidden="true"></span>
                </ButtonBack>
                <div className="page-5-content">
                  <h1>더 알아보기</h1>
                  <p>나는 누구?</p>
                  <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">내 깃헙</a></p>
                <DotGroup className="indicator"></DotGroup>
                </div>
                <ButtonNext className="to-bottom">
                  <span>스크롤하여 계속 보기</span>
                  <br />
                  <span className="fa fa-arrow-down" aria-hidden="true"></span>
                </ButtonNext>
              </div>
            </Slide>

            <Slide index={5}>
              <div className="page-6">
                <ButtonBack className="to-top">
                  <span>스크롤하여 계속 보기</span>
                  <br />
                  <span className="fa fa-arrow-up" aria-hidden="true"></span>
                </ButtonBack>
                <div className="page-6-content">
                  <h1>더 알아보기</h1>
                  <p>나는 누구?</p>
                  <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">내 깃헙</a></p>
                </div>
                <DotGroup className="indicator"></DotGroup>
              </div>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div >
    );
  }
}

export default App;