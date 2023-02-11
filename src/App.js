import "./App.css";
import { useState,useEffect } from "react"; 
import Document from "./Document";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
   fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
  .then(response => response.text())
  .then((data) => setData(data));
  },[]);


  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <p className="title">A React Task</p>
          <p className="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div className="container is-fullhd">
        <div className="notification">
          Edit the <code>./src</code> folder to add components.
          {data ? <Document title="Terms and Conditions" content={data}/> : "" }
        </div>
      </div>
    </div>
  );
}

export default App;
