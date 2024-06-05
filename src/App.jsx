import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreetingMessage] = useState("Greeting Message");

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={() => setGreetingMessage("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => setGreetingMessage("Hi!")}>Hi!</button>
        <button onClick={() => setGreetingMessage("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
