import { useState } from 'react'
import './App.css'
import Facebook from './assets/Facebook-logo.png'
import Google from './assets/Google-logo.png'
import Apple from './assets/Apple-Logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="login-container">
      <h1>LOGIN</h1>

        <label for="usuario">USUÁRIO</label>
        <input type="text" placeholder="Digite seu usuário" required />

        <label for="senha">SENHA</label>
        <input type="password" placeholder="Digite sua senha" required />

        <div className="opcoes">
          
            <input type="checkbox" /> Manter conectado
          <a href="#">esqueceu a senha?</a>
        </div>

        <button type="submit">ENTRAR</button>

        <p>LOGAR COM</p>
        <div className="social">
           
          <img src={Facebook} alt="" className="facebook" />
          
          <img src={Google} alt="" className="google" />
        
          <img src={Apple} alt="" className="apple" />
        </div>

        <p className="cadastro">
          NÃO TEM CONTA? <a href="#">Inscrever-se</a>
        </p>
      
    </div>
    </>
  )
}

export default App
