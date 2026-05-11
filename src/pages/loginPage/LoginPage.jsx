import Button from "../../components/Button/Button"

export function LoginPage(){
    return (
        <form className="LoginPage">
            <div>
            <label htmlFor="username">Nome de usuário</label>
                <input type="text" placeholder="Digite seu nome de Usuário" name="username" required />
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite a senha" name="password" onChange={(e) => setPassword(e.target.value)} required />
        
            <Button type="login">Login</Button>
        </div>
        <div>
            <Button type="cancel">Cancelar</Button>
        </div>
        
        
        </form>


    )
}