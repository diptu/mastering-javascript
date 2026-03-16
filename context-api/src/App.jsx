import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UserContextProvider>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 className="text-3xl font-bold underline">
          React Context API Mastery
        </h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;