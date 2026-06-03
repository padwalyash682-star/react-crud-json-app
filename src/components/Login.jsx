import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5000/students?email=${email}&password=${password}`);
            if (response.data.length > 0) {
                alert("Login Successful");
                 localStorage.setItem("student", JSON.stringify(response.data[0]));
                 navigate("/dashboard");
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
        console.log(error);
        }
    };
    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <br/>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <br/><br/>
                <label>Password:</label>
                <br/>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <br/><br/>
                <button type="submit">Login</button>
            </form> 
        </>
    );
}
export default Login;
           