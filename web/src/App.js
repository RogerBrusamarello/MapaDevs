//Componente: Bloco isolado de HTML, CSS, JS, o qual não interefe no restante da aplicação
//Propriedade: Informações que um componente PAI passa para o componente filho
//Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade)
import React from 'react';
import './global.css';
import './App.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <label htmlFor=""></label>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
