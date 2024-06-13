import React, { useState } from 'react';
import Book from './Book';
import { AppContainer } from './styles';

const App = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        const correctPassword = 'Joaquim2022#';
        if (password === correctPassword) {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    }

    if (isAuthenticated) {
        return <Book />;
    }

    return (
        <AppContainer>
            <h1>Enter Password to Access the Book</h1>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px' }}
            />
            <button onClick={handleLogin} style={{ padding: '10px 20px', borderRadius: '4px' }}>Enter</button>
        </AppContainer>
    );
}

export default App;
