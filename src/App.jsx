import { usePipwerksContext } from 'contexts/PipwerksProvider';

const App = () => {
  const { pipwerks } = usePipwerksContext();

  if (!pipwerks) {
    return <div className="App">Não foi possível carregar a aplicação</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
