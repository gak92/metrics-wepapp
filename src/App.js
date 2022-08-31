import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Companies from './components/Companies.js';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Companies />} />
      </Routes>
    </div>
  );
}

export default App;
