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
// function App() {
//   // 📌 문자열이나 숫자가 우리가 보여주고 싶은 데이터 타입이기 때문에 보통 이 둘만 출력한다. (배열이나 불리안은 우리가 원하는 대로 출력 X)
//   // 이때, 리액트는 텍스트 컨텐트로서 object를 보여주지 못한다. 따라서 end up getting an error..
//   let message = "Bye there!";
//   if (Math.random() > 0.5) {
//     message = "Hello there!";
//   }

//   // 📌 JSX 안에 있는 변수를 curly braces를 이용해 보여줄 수 있다.
//   // => most often use curly braces to show strings or numbers.
//   return <h1>{message}</h1>;
// }

// // ❤️ Customizing elements with JSX props(=properties)
// // very similiar to HTML attributes
// // What are the differences btw those??
// // 🧩 HTML 속성: HTML에서 <input type="text" value="Hello" />와 같은 방식으로 속성을 정의합니다. 이때, 속성값은 항상 문자열로 처리됩니다.

// // 🧩 JSX props: JSX에서 React 컴포넌트의 속성은 props라고 불리며, JSX 내에서 React 요소의 속성을 정의할 때 사용합니다. JSX에서는 props 값을 "중괄호 {}"를 사용하여 전달합니다. 이 방식은 HTML 속성과는 다르게 동적 값을 전달하는 데 유용합니다.
// // 예를 들어, <MyComponent name="John" />처럼 사용할 수 있습니다. 여기서 name은 props에 해당하고, "John"은 그 값입니다.
// function App() {
//   // const inputType = "number";
//   // const minValue = 5;
//   // return <input type={inputType} min={minValue} max={10} />;

//   // Props don't have to be defined as variables.
//   // 💥string should have "" & number should have {}.
//   return <input style={{ border: "3px solid red" }} type="number" min={5} />;

//   // something that has to be clarified about displaying the object.
//   // const config = { color: 'red'}
//   // return (
//   //   <div>
//   // ❌ Trying to display an object -> Doesn't work!
//   // we can't print it out on the screen -> 💥Error
//   // (= An object can't go in between JSX tags..)
//   //     ❌<h1>{config}</h1>❌
//   // ✅ Trying to provide an object as a prop. OK! ✅
//   // Not OK as something that we want to display
//   //     ✅<input abc={config} />✅
//   //   </div>
//   // );
// }

// ❤️ 5 rules for converting HTML to JSX
// 1. In JSX, all prop names follow camelCase.
// 2. In JSX, attributes meant to be numbers should be provided as numbers with curly braces.
// 3. In JSX, boolean 'true' can be written with just the property(prop) name. 'False' should be written with {}.
// 4. In JSX, the 'class' attribute is written as 'className'.
// 5. In JSX, in-line styles are provided as objects.
// function App() {
//   return <textarea autoFocus={true} />;
// }

function App() {
  return <input placeholder="hi there" />;
}

// 5) Show the component on the screen
root.render(<App />);
