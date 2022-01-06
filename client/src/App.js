import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState();
  useEffect(() => {
    fetch("/api/contacts")
      .then((rsp) => rsp.json())
      .then((rsp) => {
        console.log(rsp);
      });
  }, []);

  const handleSubscribeSumit = (e) => {
    e.preventDefault();
    axios.post("/api/contacts", { email });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubscribeSumit}>
          <input
            placeholder="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <button type="submit">Subscribe</button>
        </form>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
