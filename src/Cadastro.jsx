import { useState } from 'react'
import './App.css'
import Facebook from './assets/Facebook-logo.png'
import Google from './assets/Google-logo.png'
import Apple from './assets/Apple-Logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="cadastro-container">
      <h1>CADASTRO</h1>

      <form>
        <label htmlFor="nome">NOME:</label>
        <input type="text" id="nome" placeholder="Digite seu nome completo" required />

        <label htmlFor="email">E-MAIL:</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" required />

        <label htmlFor="cpf">CPF:</label>
        <input type="text" id="cpf" placeholder="Digite seu CPF" required />

        <div className="linha">
          <div>
            <label htmlFor="usuario">USUÁRIO:</label>
            <input type="text" id="usuario" placeholder="Crie seu usuário" required />
          </div>

          <div>
            <label htmlFor="senha">SENHA:</label>
            <input type="password" id="senha" placeholder="Crie uma senha" required />
          </div>
        </div>

        <button type="submit">CADASTRAR</button>

        <p>LOGAR COM</p>
        <div className="social">
                   
          <img src={Facebook} alt="" className="facebook" />
                  
          <img src={Google} alt="" className="google" />
                
          <img src={Apple} alt="" className="apple" />
        </div>

        <p className="login-text">
          JÁ TEM CONTA? <a href="#">Logar</a>
        </p>
      </form>
    </div>
  )
}

export default App
