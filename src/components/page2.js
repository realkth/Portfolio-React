import React, { Component } from 'react';
// import { Parallax } from "react-parallax";
import Parallax from 'react-springy-parallax'


class Page2 extends Component {
  render() {
    return (
      <div className="page-2">
        <div className="page-2-content">
          <h1>안녕 친구들!</h1>
          <p>나는 누구인가 나는 누구인가 ㅠㅠ</p>
          <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">내 깃헙</a></p>
        </div>
        {/* <button type="button" className="btn btn-default to-bottom" aria-label="아래로 스크롤">
          <span className="glyphicon glyphicon-chevron-down"></span>
        </button> */}
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" width={560} height={315} src="https://www.youtube.com/embed/k8K98UBskyA" frameBorder={0} allowFullScreen />
        </div>
      </div>
 
    );
  }
}
// class Page2 extends Component {
//   render() {
//     return (
//       <Parallax strength={500} blur={{ min: -0, max: 5 }}>
//       <div className="page-2">
//         <div className="page-2-content">
//           <h1>안녕 친구들!</h1>
//           <p>나는 누구인가 나는 누구인가 ㅠㅠ</p>
//           <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">내 깃헙</a></p>
//         </div>
//         {/* <button type="button" className="btn btn-default to-bottom" aria-label="아래로 스크롤">
//           <span className="glyphicon glyphicon-chevron-down"></span>
//         </button> */}
//         <div className="embed-responsive embed-responsive-16by9">
//           <iframe className="embed-responsive-item" width={560} height={315} src="https://www.youtube.com/embed/k8K98UBskyA" frameBorder={0} allowFullScreen />
//         </div>
//       </div>
//       </Parallax>
 
//     );
//   }
// }

export default Page2;
