import { useState } from 'react';

import './ExpenseForm.css';

export const ExpenseForm = (props: any) => {
	//méthode utilisant 3 useState()
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	//méthode avec un unique useState()
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });

	const titleChangeHandler = (event: any) => {
		setEnteredTitle(event.target.value);
		//setUserInput({
		//	...userInput, //spread operator pour recup l'objet userInput
		//	enteredTitle: event.target.value, //override de enteredTitle
		//});
		// setUserInput((prevState) => {
		// 	return {
		// 		...prevState,
		// 		enteredTitle: event.target.value,
		// 	};
		// });
	};

	const amountChangeHandler = (event: any) => {
		setEnteredAmount(event.target.value);
		// setUserInput((prevState) => {
		// 	return {
		// 		...prevState,
		// 		enteredAmount: event.target.value,
		// 	};
		// });
	};

	const dateChangeHandler = (event: any) => {
		setEnteredDate(event.target.value);
		// setUserInput((prevState) => {
		// 	return {
		// 		...prevState,
		// 		enteredDate: event.target.value,
		// 	};
		// });
	};

	const submitHandler = (event: any) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="">Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="">Amount</label>
					<input
						type="number"
						value={enteredAmount}
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="">Date</label>
					<input
						type="date"
						value={enteredDate}
						min="01/01/2019"
						max="31/12/2022"
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>
					Annuler
				</button>
				<button type="submit">Ajouter dépense</button>
			</div>
		</form>
	);
};
