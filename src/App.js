
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import './App.css';

function App() {
  return (
 
    <Router>
        <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register  />} />
        

        </Routes>
    </Router>
  );
}

export default App;
