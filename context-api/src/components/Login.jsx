import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // FIX: Use curly braces {} because the Provider value is an object
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass an object to the state so Profile can access 'username'
        setUser({ username, password });
    };

    return (
        <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
            <h2>Login</h2>
            <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
            />
            {" "}
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
            />
            {" "}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;