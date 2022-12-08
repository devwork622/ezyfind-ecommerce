import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Home from './pages/Home';
import Apply from './pages/LegalJobs/Apply';
import Tenders from './pages/Tenders';
import TenderDetails from './pages/Tenders/TenderDetails';
import Cart from './pages/Cart';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux';
import CartReducer from './redux/Cart';
import Attorneys from './pages/Attorneys';

function App() {

  const rootReducer = combineReducers({
    CartReducer,    
  })

  return (
    <Provider store={createStore(rootReducer)}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/apply" element={<Apply />}></Route>
          <Route path="/tenders" element={<Tenders />}></Route>
          <Route path="/tender-details" element={<TenderDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/attorneys" element={<Attorneys />}></Route>
        </Routes>
        <Footer />
        <ScrollTop />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
