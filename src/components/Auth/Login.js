import {useState} from 'react' ; 
import axios from 'axios' ;
import {useNavigate} from 'react-router-dom';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/auth/login', { email, password });
        localStorage.setItem('token', response.data.token);  // Save JWT token
        navigate('/dashboard');  // Redirect based on user type
      } catch (err) {
        console.error('Login failed', err);
      }
    };
  
    return (
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  };
  
  export default Login;