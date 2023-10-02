import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import { Routes,Route } from 'react-router-dom';
import History from './components/History';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Header/>
      <Routes>
          <Route path="/*"  element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Search>} />
          <Route path="/home"  element={<Search  searchTerm={searchTerm} setSearchTerm={setSearchTerm}> </Search>} />
          <Route path="/history"  element={<History setSearchTerm={setSearchTerm}></History>} />
          {/* <Header/>
      <Search/> */}
      </Routes>
    </div>
  );
}

export default App;
