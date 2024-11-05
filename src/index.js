// 1) Import the React and ReactDOM libraries
import React from "react";
// React: 여러 개의 컴포넌트들이 어떤 식으로 함께 적용되는지를 정의하거나 컴포넌트가 무엇인지를 정의하는 라이브러리.
import ReactDOM from "react-dom/client";
// ReactDOM: 컴포넌트를 브라우저 상에 보여주는 라이브러리
// = 컴포넌트들을 가져다가, HTML로 바꿔주고 브라우저 상에 보여줌

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  // 📌 문자열이나 숫자가 우리가 보여주고 싶은 데이터 타입이기 때문에 보통 이 둘만 출력한다. (배열이나 불리안은 우리가 원하는 대로 출력 X)
  // 이때, 리액트는 텍스트 컨텐트로서 object를 보여주지 못한다. 따라서 end up getting an error..
  let message = "Bye there!";
  if (Math.random() > 0.5) {
    message = "Hello there!";
  }

  // 📌 JSX 안에 있는 변수를 curly braces를 이용해 보여줄 수 있다.
  // => most often use curly braces to show strings or numbers.
  return <h1>{message}</h1>;
}

// 5) Show the component on the screen
root.render(<App />);
