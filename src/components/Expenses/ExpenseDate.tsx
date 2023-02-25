import './ExpenseDate.css';

export const ExpenseDate = (props: any) => {
	const monthCapitalized: string = props.date.toLocaleString('fr-FR', {
		month: 'long',
	});
	const month =
		monthCapitalized.charAt(0).toUpperCase() + monthCapitalized.slice(1);

	const day = props.date.toLocaleString('fr-FR', { day: '2-digit' });
	const year = props.date.getFullYear();

	return (
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__year">{year}</div>
			<div className="expense-date__day">{day}</div>
		</div>
	);
};
