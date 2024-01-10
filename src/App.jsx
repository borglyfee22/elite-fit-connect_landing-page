import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Footer, Header, Features } from "./Containers";
import { About, Faq, Form, Navi } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navi />
        <Header />
      </div>
      <Form />
      <About />
      <Features />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
