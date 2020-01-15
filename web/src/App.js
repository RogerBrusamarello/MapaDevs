//Componente: Bloco isolado de HTML, CSS, JS, o qual não interefe no restante da aplicação
//Propriedade: Informações que um componente PAI passa para o componente filho
//Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade)
import React, { useState, useEffect } from 'react';
import api from './services/api'

//import dos csss
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

//import dos componentes
import DevItem from './components/DevItem/'
import DevForm from './components/DevForm/'


function App() {
  const [devs, setDevs] = useState([]);

  //Função para buscar todos os Devs cadastrados
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, [])

  //Função para adicionar os devs
  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }
  //Página
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        {/* Mandando a função handleAddDEV via props */}
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div >
  );
}

export default App;
