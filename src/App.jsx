import { usePipwerksContext } from 'contexts/PipwerksProvider';

import InitialScreen from 'views/InitialScreen';

const App = () => {
  const { pipwerks } = usePipwerksContext();

  if (!pipwerks) {
    return <div className="App">Não foi possível carregar a aplicação</div>;
  }

  return <InitialScreen />;
};

export default App;
