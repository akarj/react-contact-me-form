import { useState } from "react";
import "./App.scss";
import FormInput from "./components/formInput/FormInput";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    fullname: "",
    birthday: "",
    password: "",
    cnfPassword: "",
  });
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput name="Username" placeholder="Username" />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="fullname" placeholder="Full Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
