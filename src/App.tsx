import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import './App.css';
import DataProvider from './context/DataContext/Provider';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
