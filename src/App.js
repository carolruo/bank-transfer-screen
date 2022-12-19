import './App.css';
import TextField from './components/TextField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField label="Data de Início" placeholder="Digite a data de início"/>
        <TextField label="Data de Fim" placeholder="Digite a data de fim"/>
        <TextField label="Nome do Operador Transacionado" placeholder="Digite o nome do operador"/>
      </header>
    </div>
  );
}

export default App;
