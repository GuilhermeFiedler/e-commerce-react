import Button from "../../components/Button/Button"
import { useAuth } from "../../hook/useAuth"

export function LoginPage(){
    const {login, loading } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if (!email.trim() || !password.trim()){
            return alert("Preencha todos os campos.");
        }
    onLoginSubmit({email, password})
    setEmail("");
    setPassword("");

    try{
        await login(email, password);
        alert("Login bem sucedido");
    } catch(err){
        alert(err.message);
    }
    }
    return (
        <form className="LoginPage" onSubmit={handleSubmit}>
            <div> 
            <label>Email</label>
                <input type="text" placeholder="Digite seu email" name="email" onChange={(e) => setEmail(e.target.value)} required />
            <label>Senha</label>
            <input type="password" placeholder="Digite a senha" name="password" onChange={(e) => setPassword(e.target.value)} required />
        
            <Button type="login">{loading ? "Logging in..." : "Login"}</Button>
        </div>
        <div>
            <Button type="cancel">Cancelar</Button>
        </div>
        
        
        </form>


    )
}