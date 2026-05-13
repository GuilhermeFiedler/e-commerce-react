import Button from "../../components/Button/Button";
import { useAuth } from "../../hook/useAuth";

export function RegisterPage() {
  const { register, loading } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim() || !email.trim() || !password.trim()) {
      return alert("Preencha todos os campos.");
    }
    onRegisterSubmit({ username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");

    try {
      await register(username, email, password);
      alert("Usuário cadastrado");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <form className="RegisterPage" onSubmit={handleSubmit}>
      <div>
        <label>Nome de usuário</label>
        <input
          type="text"
          placeholder="Insira seu nome de usuário"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Insira seu email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Senha</label>
        <input
          type="password"
          placeholder="Insira sua senha"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <Button type="cancel">Cancelar</Button>
        <Button type="register">{loading ? "Cadastrando..." : "Cadastrar-se"}</Button>
      </div>
    </form>
  );
}
