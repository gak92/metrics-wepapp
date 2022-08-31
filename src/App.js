import { Routes, Route } from 'react-router-dom';
import './App.css';
import Companies from './components/Companies';
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
