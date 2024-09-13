import NavBar from "./Navbar";
import Home from './Home'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
