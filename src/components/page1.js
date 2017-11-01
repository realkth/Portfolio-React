import React, { Component } from 'react';
// import { Parallax, Background } from "react-parallax";
import Parallax from 'react-springy-parallax'

// bgStyle = {{ backgroundColor: '#243B4A' }}

class Page1 extends Component {
  render() {
    return (

        <div className="page-1">
          <div className="page-1-content">
            <h1>안녕 친구들!</h1>
            <p>나는 누구인가 나는 누구인가 ㅠㅠ</p>
            <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">
              <span className="fa fa-github " aria-hidden="true"></span>
              &nbsp; Github</a></p>
          </div>
          <button className="to-bottom">
            <span>스크롤하여 계속 보기</span>
            <br />
            <span className="fa fa-arrow-down" aria-hidden="true"></span>
          </button>
        </div>
    );
  }
}
// class Page1 extends Component {
//   render() {
//     return (
//       <Parallax strength={500}>
//         <Background>
//           {/* <img src="http://www.fillmurray.com/400/300" /> */}
//           <div style={{
//             width: 600,
//             height: 600,
//             backgroundColor: '#243B4A'
//           }}></div>
//           {/* <img src="http://www.fillmurray.com/500/300" /> */}
//         </Background>
//         <div className="page-1">
//           <div className="page-1-content">
//             <h1>안녕 친구들!</h1>
//             <p>나는 누구인가 나는 누구인가 ㅠㅠ</p>
//             <p><a className="btn btn-dark btn-lg" href="https://github.com/realkth" role="button">
//               <span className="fa fa-github " aria-hidden="true"></span>
//               &nbsp; Github</a></p>
//           </div>
//           <button className="to-bottom">
//             <span>스크롤하여 계속 보기</span>
//             <br />
//             <span className="fa fa-arrow-down" aria-hidden="true"></span>
//           </button>
//         </div>
//       </Parallax>
//     );
//   }
// }

export default Page1;
