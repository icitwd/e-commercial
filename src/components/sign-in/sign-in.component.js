import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
export default function SignIn() {
  const [contact, setContact] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    setContact({ email: "", password: "" });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="sign-in">
      <h2>I already have an account </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        {" "}
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          value={contact.email}
          required
          label="email"
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          value={contact.password}
          required
          label="password"
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
}
