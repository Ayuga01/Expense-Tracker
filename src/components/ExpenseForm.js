import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useExpenses } from '../context/ExpenseContext';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    background: #ffffff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;

    input, select, button {
        margin-bottom: 1rem;
        padding: 0.75rem;
        font-size: 1rem;
        border-radius: 4px;
        border: 1px solid #ddd;
    }

    button {
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

const ExpenseForm = ({ onClose, initialData }) => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: initialData || { description: '', amount: '', date: '', category: 'Food' },
    });
    const { dispatch } = useExpenses();

    const onSubmit = data => {
        const expense = {
            id: initialData ? initialData.id : Date.now(),
            ...data,
            amount: parseFloat(data.amount),
        };
        if (initialData) {
            dispatch({ type: 'EDIT_EXPENSE', payload: expense });
        } else {
            dispatch({ type: 'ADD_EXPENSE', payload: expense });
        }
        reset();
        onClose();
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('description', { required: true })} placeholder="Description" />
            <input {...register('amount', { required: true })} type="number" placeholder="Amount" />
            <input {...register('date', { required: true })} type="date" />
            <select {...register('category')}>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
            </select>
            <button type="submit">Save Expense</button>
        </Form>
    );
};

export default ExpenseForm;