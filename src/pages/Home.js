import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import styled from 'styled-components';



const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Home = () => {
    return (
        <HomeContainer>
            <h1>Track Your Expenses</h1>
            <ExpenseForm onClose={() => {}} />
            <ExpenseList />
        </HomeContainer>
    );
};

export default Home;