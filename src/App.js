import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure Routes is imported here
import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Summary from './pages/Summary';
import { ExpenseProvider } from './context/ExpenseContext';

function App() {
    return (
        <ExpenseProvider>
            <Router>
                <GlobalStyle />
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/summary" element={<Summary />} />
                    </Routes>
                </div>
            </Router>
        </ExpenseProvider>
    );
}

export default App;