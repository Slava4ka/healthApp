import React, { useState } from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import styles from './myData.module.scss'
import SmallCustomButton from '../../components/CustomButton/SmallCustomButton'
import { generateSeq } from './seq'
import TinyLineChart from '../../components/TinyLineChart/TinyLineChart'

interface ISections {
	name: string;
	value: 'Analyzes' | 'Research' | 'Diagnoses';
}

interface IMyData {
	isDataDigitized: boolean;
	setDataDigitized: (state: boolean) => void;
	setNewMessage: (count: number) => void;
	setNewRisks: (state: boolean) => void;
}

const MyData = ({
	isDataDigitized,
	setDataDigitized,
	setNewMessage,
	setNewRisks,
}: IMyData) => {
	const [selectedSection, setSelectedSection] = useState<
		'Analyzes' | 'Research' | 'Diagnoses'
	>('Analyzes')

	const sections: ISections[] = [
		{ name: 'Анализы', value: 'Analyzes' },
		{ name: 'Исследования', value: 'Research' },
		{ name: 'Диагнозы', value: 'Diagnoses' },
	]

	const rowData = [
		{
			name: 'Лейкоциты (WBC)',
			v1: 3.91,
			v2: '10 * 9/л',
			v3: { from: 4, to: 9 },
			sequence: generateSeq(),
		},
		{
			name: 'Эритроциты (RBC)',
			v1: 4.91,
			v2: '10 * 12/л',
			v3: { from: 4.3, to: 5.7 },
			sequence: generateSeq(),
		},
		{
			name: 'Гематокрит',
			v1: 62.1,
			v2: '%',
			v3: { from: 36, to: 56 },
			sequence: generateSeq(),
		},
		{
			name: 'Средний объём эритроцита',
			v1: 85.7,
			v2: 'ф/л',
			v3: { from: 80, to: 100 },
			sequence: generateSeq(),
		},
		{
			name: 'Среднее содержание HGB в эритроците',
			v1: 29.3,
			v2: 'пг',
			v3: { from: 27, to: 32 },
			sequence: generateSeq(),
		},
		{
			name: 'Средняя концентрация HGB в эритроците',
			v1: 342,
			v2: 'г/дл',
			v3: { from: 320, to: 380 },
			sequence: generateSeq(),
		},
		{
			name: 'Ширина распределения эритроцитов',
			v1: 14.0,
			v2: '%',
			v3: { from: 10, to: 16.5 },
			sequence: generateSeq(),
		},
		{
			name: 'Тромбоциты',
			v1: 179,
			v2: '10*9/л',
			v3: { from: 120, to: 380 },
			sequence: generateSeq(),
		},
		{
			name: 'Ширина распределения тромбоцитов',
			v1: 10.4,
			v2: 'г/л',
			v3: { from: 12, to: 18 },
			sequence: generateSeq(),
		},
	]

	return (
		<div className={styles.main}>
			<div className={styles.pageName}>Мои данные</div>
			<ButtonGroup
				className={styles.buttonGroup}
				color="primary"
				aria-label="outlined primary button group"
			>
				{sections.map((item) => (
					<Button
						key={item.value}
						className={
							selectedSection === item.value
								? styles.highlighted
								: ''
						}
						onClick={() => setSelectedSection(item.value)}
					>
						{item.name}
					</Button>
				))}
			</ButtonGroup>

			<div className={styles.searchBox}>
				<div className={styles.inputGroup}>
					<SearchIcon />
					<input
						type="search"
						placeholder="Введите наименование анализа"
					/>
				</div>
				<SmallCustomButton
					variant="contained"
					color="primary"
					disableRipple
					onClick={() => {
						if (!isDataDigitized) {
							setDataDigitized(true)
							setNewMessage(1)
							setNewRisks(true)
						}
					}}
				>
					Оцифровать
				</SmallCustomButton>
			</div>

			<div className={styles.dataBlock}>
				{isDataDigitized ? (
					rowData.map((item) => (
						<div className={styles.dataRow} key={item.name}>
							<div
								className={styles.rowData}
								style={{ width: '30%', fontWeight: 'bold' }}
							>
								{item.name}
							</div>
							<div
								className={styles.rowData}
								style={{
									width: '10%',
									fontWeight: 'bold',
									color:
										item.v1 < item.v3.from ||
										item.v1 > item.v3.to
											? 'red'
											: '#3ED0D0',
								}}
							>
								{item.v1}
							</div>
							<div
								className={styles.rowData}
								style={{ width: '10%' }}
							>
								{item.v2}
							</div>
							<div
								className={styles.rowData}
								style={{ width: '10%' }}
							>
								{`${item.v3.from} - ${item.v3.to}`}
							</div>
							<div
								className={styles.graph}
								style={{ width: '40%' }}
							>
								<TinyLineChart
									data={item.sequence}
									width={230}
									height={30}
								/>
							</div>
						</div>
					))
				) : (
					<div className={styles.empty}>
						<h1>У Вас отсутствуют медицинские данные</h1>
					</div>
				)}
			</div>
		</div>
	)
}

export default MyData
