// import logo from "./logo.svg";
import "./App.css";
// import { getGreeting } from "./Greeting";

const fruits = ["bananas", "apples", "oranges"];

function App() {
  return (
    <div>
      <p>My favorite fruits are {fruits.join(", ")}</p>
    </div>
  );
}

export default App;
