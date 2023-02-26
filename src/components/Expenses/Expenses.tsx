import { ExpenseItem } from './ExpenseItem';
import { Card } from '../UI/Card';
import './Expenses.css';
import { ExpenseFilter } from './ExpenseFilter';
import { useState } from 'react';
import { ExpensesList } from './ExpensesList';

export const Expenses = (props: any) => {
	const [filteredYear, setFilteredYear] = useState('2020');
	const getFilterChangeHandler = (selectedYear: any) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense: any) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={filteredYear}
					onGetFilter={getFilterChangeHandler}
				/>
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
