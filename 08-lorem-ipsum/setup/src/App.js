import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello World");
  };

  return (
    <section className="section-center">
      <h3>Tired of Boring Lorem Ipsum?</h3>
      <form action="" className="lorem-form" onSubmit={handleSubmit}></form>
    </section>
  );
}

export default App;
