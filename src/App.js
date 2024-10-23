import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Welcome from './components/welcome';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Welcome to Rendez Vous Web Set 
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
        <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register  />} />
          <Route path="/" element={<Welcome  />} />

        </Routes>
    </Router>
  );
}

export default App;
