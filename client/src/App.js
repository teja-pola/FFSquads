import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamForm from './pages/TeamForm.js';
import Payment from './pages/Payment.js';
import PrizeDisplay from './pages/PrizeDisplay.js';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamForm />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/prize" element={<PrizeDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;

