import { createContext } from 'react';
import './App.css';
import GlobalSyle from './styles/global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { Tasklist } from './pages/Tasklist/Tasklist';

const Context = createContext();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={SignIn} />
          <Route path="/signUp" Component={SignUp} />
          <Route path="/tasklist" Component={Tasklist} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
