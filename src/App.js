import { render } from "@testing-library/react";
import React from "react";
// import "./styles.css";

// class based components

// class HelloWorld extends React.Component {
//   render() {
//     return <h1>Hello world by</h1>;
//   }
// }

// function based components

// and passing the props for function based components

// function HelloWorld(props) {
//   console.log(props);
//   // use destructuring
//   const { name } = props;
//   return <h1>Hello World by using function based components and props value is : {name}</h1>;
// }


// now will see for the class based how to pass the props

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div className="app">
        <h2>{count}</h2>
        <button
          onClick={() => {
            this.setState({ count: count + 1 })
          }}>Increment</button>
      </div>
    );
  }
}
export { HelloWorld };

// this.props will have values