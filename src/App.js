import React from 'react';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import store from './redux/store'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <SearchBar />
    </Provider>
  );
}

export default App