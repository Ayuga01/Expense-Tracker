import React, { useState } from 'react';
import styled from 'styled-components';
import { useExpenses } from '../context/ExpenseContext';
import ExpenseForm from './ExpenseForm';

const List = styled.ul`
    list-style: none;
    padding: 0;

    li {
        background: #f1f1f1;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button {
        background-color: #ff4d4f;
        color: white;
        border: none;
        padding: 0.5rem;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: #d9363e;
        }
    }
`;

const ExpenseList = () => {
    const { expenses, dispatch } = useExpenses();
    const [editingExpense, setEditingExpense] = useState(null);

    const handleDelete = id => {
        dispatch({ type: 'DELETE_EXPENSE', payload: id });
    };

    const handleEdit = expense => {
        setEditingExpense(expense);
    };

    return (
        <div>
            {editingExpense && (
                <ExpenseForm
                    initialData={editingExpense}
                    onClose={() => setEditingExpense(null)}
                />
            )}
            <List>
                {expenses.map(expense => (
                    <li key={expense.id}>
                        {expense.description} - ${expense.amount} ({expense.category}) - {expense.date}
                        <div>
                            <button onClick={() => handleEdit(expense)}>Edit</button>
                            <button onClick={() => handleDelete(expense.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </List>
        </div>
    );
};

export default ExpenseList;