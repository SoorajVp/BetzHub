import { createContext, useState } from "react";

export const ActionContext = createContext();

const ActionProvider = ({ children }) => {
    const [action, setAction] = useState(0);
    const [subMenu, setSubMenu] = useState('');

    return (
        <ActionContext.Provider value={{ action, setAction, subMenu, setSubMenu }} >
            {children}
        </ActionContext.Provider>
    )
}

export default ActionProvider;