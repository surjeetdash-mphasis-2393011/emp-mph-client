import React from 'react';
import './App.css';
import Header from './shared/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Auth from './Auth/Auth';

function useStickyState(key, defaultValue) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function App() {
  const [token, setToken] = useStickyState('token', 'NOT_LOGGED_IN');

  return (

    <div>
      {(token !== 'NOT_LOGGED_IN') && <Header />}
      {(token !== 'NOT_LOGGED_IN') && <Main />}
      {(token === 'NOT_LOGGED_IN') && <Auth />}
      <Footer />
    </div>
  );
}

export default App;
