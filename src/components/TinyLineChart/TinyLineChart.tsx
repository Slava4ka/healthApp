import React from 'react'
import { Line, LineChart } from 'recharts'

interface ITinyLineChart {
	data: any;
	width?: number;
	height?: number;
}

const TinyLineChart = ({ data, height, width }: ITinyLineChart) => {
	return (
		<>
			<LineChart width={width} height={height} data={data}>
				<Line
					type="monotone"
					dataKey="pv"
					stroke="#0672A2"
					strokeWidth={2}
				/>
			</LineChart>
		</>
	)
}

export default TinyLineChart
