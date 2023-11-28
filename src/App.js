import { createContext } from 'react';
import './App.css';
import RoutesApp from './routes';
import GlobalSyle from './styles/global';

const Context = createContext();

function App() {
  return (
    <div className="App">
      <Context.Provider>
        <RoutesApp />
        <GlobalSyle />
      </Context.Provider>
    </div>
  );
}

export default App;
