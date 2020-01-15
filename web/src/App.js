//Componente: Bloco isolado de HTML, CSS, JS, o qual não interefe no restante da aplicação
//Propriedade: Informações que um componente PAI passa para o componente filho
//Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade)
import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/34141109?s=460&v=4" alt="Imagem" />
              <div className="user-info">Roger Brusamarello</div>
              <span>ReactJS, Flutter</span>
            </header>
            <p>Acadêmico em Análise e Desenvolvimento de Sistema pela Universidade de Passo Fundo. Desenvolvedor Mobile. Desenvolvedor Front-End.</p>
            <a href="https://github.com/rogerbrusamarello">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/34141109?s=460&v=4" alt="Imagem" />
              <div className="user-info">Roger Brusamarello</div>
              <span>ReactJS, Flutter</span>
            </header>
            <p>Acadêmico em Análise e Desenvolvimento de Sistema pela Universidade de Passo Fundo. Desenvolvedor Mobile. Desenvolvedor Front-End.</p>
            <a href="https://github.com/rogerbrusamarello">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/34141109?s=460&v=4" alt="Imagem" />
              <div className="user-info">Roger Brusamarello</div>
              <span>ReactJS, Flutter</span>
            </header>
            <p>Acadêmico em Análise e Desenvolvimento de Sistema pela Universidade de Passo Fundo. Desenvolvedor Mobile. Desenvolvedor Front-End.</p>
            <a href="https://github.com/rogerbrusamarello">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/34141109?s=460&v=4" alt="Imagem" />
              <div className="user-info">Roger Brusamarello</div>
              <span>ReactJS, Flutter</span>
            </header>
            <p>Acadêmico em Análise e Desenvolvimento de Sistema pela Universidade de Passo Fundo. Desenvolvedor Mobile. Desenvolvedor Front-End.</p>
            <a href="https://github.com/rogerbrusamarello">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
