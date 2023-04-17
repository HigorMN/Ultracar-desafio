import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import './App.css';
import DataProvider from './context/DataContext/Provider';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/services" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
