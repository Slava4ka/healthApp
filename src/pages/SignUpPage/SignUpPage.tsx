import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Grid, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import styles from './signUpPage.module.scss'
import { IUserData } from '../../store/types/signUp.d'
import Face from '../../components/Face/Face'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

const sexList = [
	{
		value: 'Мужской',
		label: 'Мужской',
	},
	{
		value: 'Женский',
		label: 'Женский',
	},
	{
		value: 'Другой',
		label: 'Другой',
	},
]

interface ISignPage {
	setUserData: (data: IUserData) => void;
	push: (path: string) => void;
	setHaveUserData: () => void;
}

const SignUpPage = ({ setUserData, push, setHaveUserData }: ISignPage) => {
	const classes = useStyles()
	const [name, setName] = useState<string>('')
	const [sex, setSex] = React.useState('Мужской')
	const [weight, setWeight] = useState<number>(0)
	const [height, setHeight] = useState<number>(0)
	const [age, setAge] = useState<number>(0)

	const [showLoader, setShowLoader] = useState(true)

	useEffect(() => {
		setTimeout(() => setShowLoader(false), 1500)
	}, [])

	const changeSexHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSex(event.target.value)
	}

	const changeNameHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value.toString())
	}

	const changeWeightHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue =
			event.target.value.length > 0 ? parseInt(event.target.value, 10) : 0

		setWeight(currentValue)
	}

	const changeHeightHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue =
			event.target.value.length > 0 ? parseInt(event.target.value, 10) : 0

		setHeight(currentValue)
	}

	const changeAgeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue =
			event.target.value.length > 0 ? parseInt(event.target.value, 10) : 0

		setAge(currentValue)
	}

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (
			name.length > 0 &&
			sex.length > 0 &&
			height > 0 &&
			weight > 0 &&
			age > 0
		) {
			setUserData({ name, sex, weight, height, age })
			setHaveUserData()
			push('/healthApp/main')
		} else {
			alert('Для продолжения необходимо заполнить все поля')
		}
	}

	return (
		<div className={styles.root}>
			{showLoader ? (
				<Face />
			) : (
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<div className={classes.paper}>
						<Typography
							component="h1"
							variant="h5"
							style={{ textAlign: 'center' }}
						>
							Пожалуйста, укажите Ваши данные:
						</Typography>
						<form
							className={classes.form}
							noValidate
							onSubmit={onSubmit}
						>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										value={name}
										onChange={changeNameHandle}
										autoComplete="fname"
										name="Name"
										variant="outlined"
										fullWidth
										id="name"
										label="Имя"
										color="secondary"
										autoFocus
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										id="outlined-select-sex-native"
										select
										label="Пол"
										value={sex}
										onChange={changeSexHandle}
										SelectProps={{
											native: true,
										}}
										variant="outlined"
										fullWidth
										name="sex"
									>
										{sexList.map((option) => (
											<option
												key={option.value}
												value={option.value}
											>
												{option.label}
											</option>
										))}
									</TextField>
								</Grid>
								<Grid item xs={12}>
									<TextField
										value={weight === 0 ? '' : weight}
										onChange={changeWeightHandle}
										variant="outlined"
										fullWidth
										id="weight"
										label="Вес"
										name="weight"
										autoComplete="weight"
										color="secondary"
										type="number"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										value={height === 0 ? '' : height}
										onChange={changeHeightHandle}
										variant="outlined"
										fullWidth
										id="height"
										label="Рост"
										name="height"
										autoComplete="height"
										color="secondary"
										type="number"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										value={age === 0 ? '' : age}
										onChange={changeAgeHandle}
										variant="outlined"
										fullWidth
										id="age"
										label="Возраст"
										name="age"
										autoComplete="age"
										color="secondary"
										type="number"
									/>
								</Grid>
							</Grid>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="secondary"
								className={classes.submit}
							>
								Подтвердить
							</Button>
						</form>
					</div>
				</Container>
			)}
		</div>
	)
}

export default SignUpPage
