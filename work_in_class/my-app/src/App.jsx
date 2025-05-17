import { useState } from 'react';
import React from 'react';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import Todos from './todos/Todos';
import Users from './Users';
import DataFromChildToParent from './DataFromChildToParent';
import Layout from './Layout';

const defaultTheme = {
  theme: null,
  toggleTheme: null,
}

export const ThemeContext = React.createContext(defaultTheme);


function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
    <FuncComponent />
    <ClassComponent />
    <Todos />
    <Users />
    <DataFromChildToParent />
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout />
    </ThemeContext.Provider>

    </>
  )
}

export default App
