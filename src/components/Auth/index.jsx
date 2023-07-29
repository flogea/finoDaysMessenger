import React from 'react';
import { Context } from '../../Context';
import './index.scss';

function Auth() {
  const { setLogin, setIsAuth } = React.useContext(Context);

  const loginHandler = (e) => {
    setLogin(e.target.value);
  };

  const closeWindow = (e) => {
    e.preventDefault();
    setIsAuth(true);
  };

  return (
    <div className="container">
      <h1>Авторизация</h1>
      <form>
        <div className="text-field">
          <label htmlFor="login" className="text-field__label">
            Логин
          </label>
          <input
            name="login"
            type="text"
            placeholder="login"
            onChange={loginHandler}
            className="text-field__input"
          />
        </div>
        <button onClick={closeWindow} className="enterBtn">
          Вход
        </button>
      </form>
    </div>
  );
}

export default Auth;
