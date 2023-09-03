import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import { Routes,Route } from 'react-router-dom';
import History from './components/History';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Header/>
      <Routes>
          <Route path="/*"  element={<Search />} />
          <Route path="/home"  element={<Search />} />
          <Route path="/history"  element={<History />} />
          {/* <Header/>
      <Search/> */}
      </Routes>
    </div>
  );
}

export default App;
