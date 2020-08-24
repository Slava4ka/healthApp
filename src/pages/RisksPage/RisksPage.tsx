import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import styles from './risks.module.scss'
import SmallCustomButton from '../../components/CustomButton/SmallCustomButton'
import data from './data'
import IOSSWitch from '../../components/IOSSwitch/IOSSwitch'

interface IInfoEntity {
	name: string;
	percent: number;
	imageAddress: string;
}

interface IOptionEntity {
	name: string;
	imageAddress: string;
	onChange: (name: string, status: boolean) => void;
	isActive: boolean;
	value1: string;
	value2: string;
}

interface IRisksPage {
	isDataDigitized: boolean;
}

const InfoEntity = ({ name, percent, imageAddress }: IInfoEntity) => (
	<div className={styles.stressIndicator} key={name}>
		<div className={styles.process} style={{ width: `${percent}%` }} />
		<div className={styles.stressData}>
			<img src={imageAddress} alt={name} />
			<span>{name.toLocaleUpperCase()}</span>
			<span>{`${percent}%`}</span>
		</div>
	</div>
)

const OptionEntity = ({
	name,
	imageAddress,
	onChange,
	value1,
	value2,
	isActive,
}: IOptionEntity) => {
	const [state, setState] = useState(isActive)
	return (
		<div className={styles.stressIndicator} key={name}>
			<div className={styles.dataSelector}>
				<img
					src={imageAddress}
					alt={name}
					className={styles.selectorImage}
				/>
				<span className={styles.selectorName}>
					{name.toLocaleUpperCase()}
				</span>
				<span className={styles.selectorValue1}>{value1}</span>
				<span className={styles.selectorValue2}>{value2}</span>
				<span className={styles.switch}>
					<IOSSWitch
						checked={state}
						onChange={(event) => {
							setState(event.target.checked)
							onChange(name, event.target.checked)
						}}
					/>
				</span>
			</div>
		</div>
	)
}

const RisksPage = ({ isDataDigitized }: IRisksPage) => {
	const [openMenuList, setOpenMenuList] = useState<Boolean>(false)
	const [list, setList] = useState(
		isDataDigitized ? data : data.map((d) => ({ ...d, percent: 0 }))
	)
	const [tempActive, setTempActive] = useState<
		{ name: string, status: boolean }[]
	>([])
	const [searchPhrase, setSearchPhrase] = useState('')

	const onChange = (name: string, status: boolean) => {
		const temp = tempActive.filter((ta) => ta.name !== name)
		setTempActive([...temp, { name, status }])
	}

	const add = () => {
		setList([
			...list.map((i) => {
				const flag = tempActive.find((obj) => obj.name === i.name)
				if (flag) {
					return {
						...i,
						isActive: flag.status,
					}
				} else {
					return i
				}
			}),
		])
		setTempActive([])
	}

	return (
		<div className={styles.main}>
			<div className={styles.pageName}>Мои Риски</div>

			<div className={styles.searchBox}>
				<div className={styles.inputGroup}>
					<SearchIcon />
					<input
						value={searchPhrase}
						onChange={(e) => setSearchPhrase(e.target.value)}
						type="search"
						placeholder="Введите наименование анализа"
						onClick={() => {
							setOpenMenuList(true)
						}}
					/>
				</div>
				{openMenuList ? (
					<SmallCustomButton
						variant="contained"
						color="primary"
						disableRipple
						onClick={() => {
							add()
							setOpenMenuList(false)
						}}
					>
						{tempActive.length > 0 ? 'Изменить' : 'Вернуться'}
					</SmallCustomButton>
				) : (
					<SmallCustomButton
						variant="contained"
						color="primary"
						disableRipple
						onClick={() => {
							setOpenMenuList(true)
						}}
					>
						Список
					</SmallCustomButton>
				)}
			</div>

			<div className={styles.indicators}>
				{!openMenuList ? (
					<>
						{list
							.filter((i: any) => i.isActive === !openMenuList)
							.map((item: any) => (
								<InfoEntity
									name={item.name}
									percent={item.percent}
									imageAddress={item.image}
								/>
							))}
					</>
				) : (
					<>
						{searchPhrase.length > 0 ? (
							<>
								{list
									.filter((i) =>
										i.name
											.toLowerCase()
											.includes(
												searchPhrase.toLowerCase()
											)
									)
									.map((item: any) => (
										<OptionEntity
											name={item.name}
											isActive={item.isActive}
											imageAddress={item.image}
											onChange={onChange}
											value1={item.value1}
											value2={item.value2}
										/>
									))}
							</>
						) : (
							<>
								{list.map((item: any) => (
									<OptionEntity
										name={item.name}
										isActive={item.isActive}
										imageAddress={item.image}
										onChange={onChange}
										value1={item.value1}
										value2={item.value2}
									/>
								))}
							</>
						)}
					</>
				)}
			</div>
		</div>
	)
}

export default RisksPage
