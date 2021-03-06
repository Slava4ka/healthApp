import React from 'react'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts'

interface IPieChart {
	data: any;
	width?: number;
	height?: number;
}

const PieChart = ({ data, height = 200, width = 350 }: IPieChart) => {
	return (
		<LineChart
			width={width}
			height={height}
			data={data}
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
		>
			<XAxis dataKey="name" />
			<YAxis />
			<CartesianGrid strokeDasharray="3 3" />
			<Tooltip />
			<Legend />
			<Line
				type="monotone"
				dataKey="pv"
				stroke="#8884d8"
				activeDot={{ r: 8 }}
			/>
			<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
		</LineChart>
	)
}

export default PieChart
