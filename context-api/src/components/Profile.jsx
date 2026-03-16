import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
    // FIX: Use curly braces {} to match the Provider's value object
    const { user } = useContext(UserContext);

    // Conditional rendering based on whether user is logged in
    if (!user) return <div style={{ margin: '10px' }}>Please Login</div>;

    return (
        <div style={{ margin: '10px' }}>
            <h1>Welcome: {user.username}</h1>
        </div>
    );
};

export default Profile;