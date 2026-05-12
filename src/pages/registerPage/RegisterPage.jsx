import Button from "../../components/Button/Button"

export function RegisterPage(){
    
     return (
            <form className="LoginPage">
                <div>
                <label htmlFor="username">Nome de usuário</label>
                    <input type="text" placeholder="Insira seu nome de usuário" name="username" onChange={(e) => setUsername(e.target.value)} required />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Insira seu email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                   <label htmlFor="password">Senha</label>
                <input type="password" placeholder="Insira sua senha" name="password" onChange={(e) => setPassword(e.target.value)} required />
                
            </div>
            <div>
                <Button type="cancel">Cancelar</Button>
                <Button type="register">Registrar</Button>
            </div>
            
            
            </form>
    
    
        )
}