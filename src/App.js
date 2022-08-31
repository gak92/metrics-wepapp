import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Companies from './components/Companies';
import CompanyDetails from './components/CompanyDetails';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Companies />} />
        <Route path="/:symbol" element={<CompanyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
