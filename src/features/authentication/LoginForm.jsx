import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin.js";
import SpinnerMini from "../../ui/SpinnerMini.jsx";

function LoginForm() {
  const [email, setEmail] = useState("scott.nextjs@gmail.com");
  const [password, setPassword] = useState("arshia1381");

  const { login, isLogingIn } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLogingIn}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLogingIn}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size="large" disabled={isLogingIn}>
          {!isLogingIn ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
