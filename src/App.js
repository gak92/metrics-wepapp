import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Companies from './components/Companies';
import CompanyDetails from './components/CompanyDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={<Companies />} />
        <Route path="/:symbol" element={<CompanyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
