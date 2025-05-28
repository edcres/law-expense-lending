import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { getExpenses } from '../api/salesforce';

const ExpenseContext = createContext();
const ExpenseDispatchContext = createContext();

const initialState = {
  expenses: [],
  loading: true,
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOAD_EXPENSES':
      return { ...state, expenses: action.payload, loading: false };
    case 'UPDATE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map(e =>
          e.id === action.payload.id ? action.payload : e
        )
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getExpenses()
      .then(data => dispatch({ type: 'LOAD_EXPENSES', payload: data }))
      .catch(err => dispatch({ type: 'SET_ERROR', payload: err.message }));
  }, []);

  return (
    <ExpenseContext.Provider value={state}>
      <ExpenseDispatchContext.Provider value={dispatch}>
        {children}
      </ExpenseDispatchContext.Provider>
    </ExpenseContext.Provider>
  );
}

export function useExpenses() {
  return useContext(ExpenseContext);
}

export function useExpenseDispatch() {
  return useContext(ExpenseDispatchContext);
}
