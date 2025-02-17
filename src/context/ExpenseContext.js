import React, { createContext, useReducer, useContext } from 'react';

const ExpenseContext = createContext();

const expenseReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.payload];
        case 'EDIT_EXPENSE':
            return state.map(expense =>
                expense.id === action.payload.id ? action.payload : expense
            );
        case 'DELETE_EXPENSE':
            return state.filter(expense => expense.id !== action.payload);
        default:
            return state;
    }
};

export const ExpenseProvider = ({ children }) => {
    const [expenses, dispatch] = useReducer(expenseReducer, []);

    return (
        <ExpenseContext.Provider value={{ expenses, dispatch }}>
            {children}
        </ExpenseContext.Provider>
    );
};

export const useExpenses = () => useContext(ExpenseContext);