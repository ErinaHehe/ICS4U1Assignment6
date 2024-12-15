import { createContext, useState, useContext } from "react";
import { Map } from 'immutable';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [firstname, setFirstname] = useState("");
    const [cart, setCart] = useState(Map());

    return (
        <StoreContext.Provider value={{ firstname, setFirstname, cart, setCart }}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}