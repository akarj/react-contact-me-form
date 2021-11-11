import { useState } from "react";
import "./App.scss";
import FormInput from "./components/formInput/FormInput";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be lies between 6-50 characters, with no special character included!!",
      label: "Username",
      pattern: "^[a-zA-Z0-9]{3,19}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter a valid email address!!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password...",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMessage:
        "Password should be 8-20 characters, with including 1 letter, 1 number and 1 special character!!",
      label: "Password",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password...",
      errorMessage: "password is not matching...",
      pattern: formData.password,
      label: "Confirm Password...",
      required: true,
    },
  ];

  //Funtions
  const handleSubmit = e => {
    e.preventDefault();
  };
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map(input => (
          <FormInput
            key={input.id}
            {...input}
            value={formData[input.name]}
            onChange={onChange}
          />
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
