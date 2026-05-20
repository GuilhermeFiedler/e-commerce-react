import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import useAuth from "../../hook/useAuth";
import { useState } from "react";

export function RegisterPage() {
  const { register, loading } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();


    try {
      await register(username, email, password);
      alert("Usuário cadastrado");

      navigate("/home")
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <form className="RegisterPage" onSubmit={handleSubmit}>
      <div>
        <label>Nome de usuário</label>
        <input
          type="text"
          placeholder="Insira seu nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Insira seu email"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
        />
        <label>Senha</label>
        <input
          type="password"
          placeholder="Insira sua senha"
          onChange={(e) => setPassword(e.target.value)}
          required
          value={password}
        />
      </div>
      <div>
        <Button type="cancel" onClick={() => {navigate("/home")}}>Cancelar</Button>
        <Button type="register">{loading ? "Cadastrando..." : "Cadastrar-se"}</Button>
      </div>
    </form>
  );
}
