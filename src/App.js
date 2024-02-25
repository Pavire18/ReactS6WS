import './App.scss';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { HashRouter, Routes, Route } from 'react-router-dom';

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_URL = process.env.REACT_APP_API_URL;

import Spanish from './lang/es.json';
import English from './lang/en.json';
import CustomHeader from './components/CustomHeader/CustomHeader';
import HomePage from './components/HomePage/HomePage';
import UserList from './components/UserList/UserList';
import CreateForm from './components/CreateForm/CreateForm';

const locale = navigator.language;
let defaultMessages = Spanish;
switch (locale) {
  case 'en-EN':
    defaultMessages = English;
    break;
  case 'es-ES':
    defaultMessages = Spanish;
    break;
  default:
    defaultMessages = English;
}

function App() {
  const [messages, setMessages] = React.useState(defaultMessages);
  return (
    <IntlProvider locale={locale} messages={messages}>
      <HashRouter>
        <CustomHeader setMessages={setMessages}></CustomHeader>

        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/users'element={<UserList></UserList>}></Route>
          <Route path='/create-user' element={<CreateForm></CreateForm>}></Route>
        </Routes>
      </HashRouter>
    </IntlProvider>
  );
}

export default App;
