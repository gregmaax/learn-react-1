import './ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card';

export const ExpenseItem = (props: any) => {
	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">{props.amount}€</div>
				</div>
			</Card>
		</li>
	);
};
