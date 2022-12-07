import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apply from './pages/LegalJobs/Apply';
import Tenders from './pages/Tenders';
import TenderDetails from './pages/Tenders/TenderDetails';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/apply" element={<Apply />}></Route>
        <Route path="/tenders" element={<Tenders />}></Route>
        <Route path="/tender-details" element={<TenderDetails />}></Route>
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
