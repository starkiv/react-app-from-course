import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const addExpenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={addExpenseFilterHandler}
      />
      {props.data.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};
export default Expenses;
