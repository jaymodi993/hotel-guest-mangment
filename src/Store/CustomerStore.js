import { createContext } from "react";

export const CustomerContext = createContext(
    {
        customerList: [],
        addCustomer: () => {},
        customerData: {}
    }
);