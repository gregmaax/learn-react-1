import { ExpenseItem } from './ExpenseItem';
import './ExpensesList.css';

export const ExpensesList = (props: any) => {
	let expensesContent = <p>Aucune dépenses trouvées</p>;

	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">Aucune dépense trouvée</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.items.map((expense: any) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};
