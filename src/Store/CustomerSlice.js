import { configureStore, createSlice } from "@reduxjs/toolkit";
import employee from "../EmployeeAdd";

const EmployeeSlice = createSlice({

    name: 'emp',
    initialState: {employeeList: [], employee: {} },
    reducers: { 

        addEmployee: (state, action) =>{
            const newEmployeeList = [...state.employeeList, action.payload.body ];
            state.employeeList = newEmployeeList;
            return state;
        },

        updateEmployee: (state, action) =>{
            let newEmployees = state.employeeList.filter(i => i.firstName !== action.payload.body.firstName);
            newEmployees = [...newEmployees,action.payload.body];
            state.employeeList = newEmployees;
            state.employee = {};
        },

        deleteEmployee: (state, action) =>{
            let newEmployees = state.employeeList.filter(i => i.firstName !== action.payload.body.firstName);
            state.employeeList = newEmployees;
        },

        fillFormEmployee: (state, action) =>{
            state.employee = action.payload.body;
        },
    }

});

export const EmployeeAction = EmployeeSlice.actions;

const EmployeeStore = configureStore ({
    reducer: {
        employee: EmployeeSlice.reducer
    },

}); 

export default EmployeeStore;