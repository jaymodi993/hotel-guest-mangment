import { createContext } from "react";

export const CustomerContext = createContext(
    {
        customerList: [],
        addCustomer: () => {},
        deleteCustomer: () => {},
        editCustomer: () => {},
        fillCtmForm: () => {},
        ctmData: {}
    }
);