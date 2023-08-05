import React from "react";
import Login from "./Login";

var isLoggedIn = false;
var date = new Date(2023, 1, 1, 13).getHours();

// function checkLogged() {
//   if (isLoggedIn) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      {date > 12 && <h1> Why are you still working</h1>}
    </div>
  );
}

export default App;
