import { ExpenseItem } from './ExpenseItem';
import { Card } from '../UI/Card';
import './Expenses.css';
import { ExpenseFilter } from './ExpenseFilter';
import { ReactNode, useState } from 'react';

export const Expenses = (props: any) => {
	const [filteredYear, setFilteredYear] = useState('2020');
	const getFilterChangeHandler = (selectedYear: any) => {
		setFilteredYear(selectedYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={filteredYear}
					onGetFilter={getFilterChangeHandler}
				/>
				{props.items.map((expense: any) => (
					<ExpenseItem
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
