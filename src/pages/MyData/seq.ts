export default [
	[
		{ name: 'Page A', uv: 40, pv: 24 },
		{ name: 'Page B', uv: 30, pv: 13 },
		{ name: 'Page C', uv: 20, pv: 98 },
		{ name: 'Page D', uv: 27, pv: 39 },
		{ name: 'Page E', uv: 18, pv: 48 },
		{ name: 'Page F', uv: 23, pv: 38 },
		{ name: 'Page G', uv: 34, pv: 43 },
		{ name: 'Page K', uv: 34, pv: 43 },
		{ name: 'Page L', uv: 34, pv: 43 },
	],
	[
		{ name: 'Page A', uv: 36, pv: 24 },
		{ name: 'Page B', uv: 30, pv: 13 },
		{ name: 'Page C', uv: 20, pv: 93 },
		{ name: 'Page D', uv: 11, pv: 3 },
		{ name: 'Page E', uv: 1, pv: 88 },
		{ name: 'Page F', uv: 23, pv: 58 },
		{ name: 'Page G', uv: 34, pv: 33 },
		{ name: 'Page K', uv: 34, pv: 43 },
		{ name: 'Page L', uv: 34, pv: 99 },
	],
	[
		{ name: 'Page A', uv: 90, pv: 2 },
		{ name: 'Page B', uv: 30, pv: 11 },
		{ name: 'Page C', uv: 75, pv: 66 },
		{ name: 'Page D', uv: 27, pv: 39 },
		{ name: 'Page E', uv: 2, pv: 48 },
		{ name: 'Page F', uv: 83, pv: 34 },
		{ name: 'Page G', uv: 31, pv: 43 },
		{ name: 'Page K', uv: 34, pv: 43 },
		{ name: 'Page L', uv: 0, pv: 0 },
	],
]

const createEntity = (index: number) => {
	return {
		name: `Page ${index}`,
		uv: Math.random() * (180 - 10) + 10,
		pv: Math.random() * (180 - 10) + 10,
	}
}

export const generateSeq = () => {
	const sequenceLength = Math.random() * (16 - 6) + 6
	const seq = []
	// eslint-disable-next-line no-plusplus
	for (let i = 0; i <= sequenceLength; i++) {
		seq.push(createEntity(i))
	}

	return seq
}
