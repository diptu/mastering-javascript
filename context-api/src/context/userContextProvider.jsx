import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    // State to hold user data
    const [user, setUser] = useState(null);

    return (
        // We pass an OBJECT {{ user, setUser }}
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;