import './App.css';
import Header from './containers/header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Productlisting from './containers/productlisting';
import Productdetails from './containers/productdetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Productlisting/>} />
          <Route path="/product/:productId" element={<Productdetails/>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;