import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';


function Welcome() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Rendez Vous Web Set 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to='/Login'  style={{ width: '218px', height: '30px' }}>Login</Link>
        <Link to='/Register'  style={{ width: '218px', height: '30px' }}>Register</Link>
      </header>
    </div>

  );
}

export default Welcome;
