import { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(false);

    return (
        <AdminContext.Provider value={{ admin, setAdmin }} >
            {children}
        </AdminContext.Provider>
    )
}

export default AdminProvider;