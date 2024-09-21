import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #007bff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    a {
        color: #fff;
        text-decoration: none;
        margin: 0 1rem;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <h1>Expense Tracker</h1>
            <div> 
                <Link to="/">Home</Link>
                <Link to="/summary">Summary</Link>
            </div>
        </Nav>
    );
};

export default Navbar;