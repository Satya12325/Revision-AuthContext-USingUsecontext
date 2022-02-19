import React from "react";
import "./styles.css";
import { Form } from "./Components/Form";
import { Status } from "./Components/Status";
import { LoginForm } from "./Components/LoginForm";

export default function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("trying to submit");
  };

  return (
    <div className="App">
      <h1>Containtment</h1>
      <LoginForm />
      <Status />
    </div>
  );
}
