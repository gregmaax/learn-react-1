import './ExpenseFilter.css';

export const ExpenseFilter = (props: any) => {
	const yearChangeHandler = (event: any) => {
		console.log(event.target.value);
		props.onGetFilter(event.target.value);
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filtrer par année</label>
				<select value={props.selected} onChange={yearChangeHandler}>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};
