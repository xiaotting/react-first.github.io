import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 类组件 使用extends React.Component的方式
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello React</h1>
//       </div>
//     );
//   }
// }

// 类组件 将Component 作为React的属性加载
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello React</h1>
//       </div>
//     );
//   }
// }

// JSX语法
const name = "React";
const heading = <h1 className="site-heading">Hello, {name}</h1>;

// 非JSX语法 '标签名'：{属性}：'文本内容'
const noHeading = React.createElement(
  "h1",
  {
    className: "site-heading",
  },
  "hello, React!"
);
ReactDOM.render(<App />, document.getElementById("root"));
