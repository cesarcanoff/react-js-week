import { useState } from "react";
import "./login.css";
import { Logo } from "../../components/Logo";

import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Preencha todos os campos do formulário!");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login realizado com sucesso!");
        navigate("/admin", { replace: true });
      })
      .catch(() => {
        toast.error("Erro ao realizar o login!");
      });
  }

  return (
    <div className="login-container">
      <Logo />

      <form className="form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Password..."
          autoComplete="on"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
