import React, { createContext, useState } from 'react';
import { DEFAULT_BUDGETS } from '../constants/categories';

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState(DEFAULT_BUDGETS);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now().toString() }]);
  };

  const updateBudget = (category, amount) => {
    setBudgets({ ...budgets, [category]: amount });
  };

  return (
    <FinanceContext.Provider
      value={{
        expenses,
        budgets,
        addExpense,
        updateBudget,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};