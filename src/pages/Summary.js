import React from 'react';
import { useExpenses } from '../context/ExpenseContext';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import styled from 'styled-components';

const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin-bottom: 2rem;
    }
`;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Summary = () => {
    const { expenses } = useExpenses();

    const data = expenses.reduce((acc, expense) => {
        const existingCategory = acc.find(item => item.name === expense.category);
        if (existingCategory) {
            existingCategory.value += expense.amount;
        } else {
            acc.push({ name: expense.category, value: expense.amount });
        }
        return acc;
    }, []);



    return (
        <SummaryContainer>
            <h2>Expense Summary</h2>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </SummaryContainer>
    );
};

export default Summary;