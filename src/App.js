import React from 'react';
import { Auth, Messenger } from './components';
import { Context } from './Context';
import './App.css';

function App() {
  const [login, setLogin] = React.useState('');
  const [isAuth, setIsAuth] = React.useState(false);

  return (
    <>
      <Context.Provider value={{ login, setLogin, isAuth, setIsAuth }}>
        {!isAuth && <Auth />}
        {isAuth && <Messenger />}
      </Context.Provider>
    </>
  );
}

export default App;
