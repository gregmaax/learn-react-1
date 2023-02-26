import './Chart.css';
import { ChartBar } from './ChartBar';

export const Chart = (props: any) => {
	const dataPointValues = props.dataPoints.map(
		(dataPoint: any) => dataPoint.value
	);
	const totalMaximum = Math.max(...dataPointValues);

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint: any) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};
