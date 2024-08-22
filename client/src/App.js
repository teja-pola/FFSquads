import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamForm from './pages/TeamForm';
import Payment from './pages/Payment';
import PrizeDisplay from './pages/PrizeDisplay';
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

