import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Grid, Button } from '@material-ui/core'
import styles from './signUpPage.module.scss'
import { IUserData } from '../../store/types/signUp.d'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		background: 'linear-gradient(180deg, #3ED0D0 31.25%, #0672A2 100%)',
		padding: '42px',
		borderRadius: '40px',
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
		backgroundColor: '#C4C4C4',
		margin: theme.spacing(3, 0, 2),
		'&:hover': {
			backgroundColor: '#C4C4C4',
		},
	},
}))

const sexList = [
	{
		value: 'Male',
		label: 'Male',
	},
	{
		value: 'Female',
		label: 'Female',
	},
	{
		value: 'Other',
		label: 'Other',
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
	const [mail, setMail] = useState<string>('')

	const [sex, setSex] = React.useState('Мужской')
	const [weight, setWeight] = useState<number>(0)
	const [height, setHeight] = useState<number>(0)
	const [age, setAge] = useState<number>(0)

	const [step, setStep] = useState(1)

	const changeSexHandle = (event: any) => {
		setSex(event.target.value)
	}

	const changeNameHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value.toString())
	}

	const changeMailHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMail(event.target.value.toString())
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
			mail.length > 0 &&
			sex.length > 0 &&
			height > 0 &&
			weight > 0 &&
			age > 0
		) {
			setUserData({ name, mail, sex, weight, height, age })
			setHaveUserData()
			push('/main')
		} else {
			alert('Для продолжения необходимо заполнить все поля')
		}
	}

	return (
		<div className={styles.root}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Typography
						component="h1"
						variant="h5"
						style={{
							textAlign: 'center',
							fontSize: '32px',
							fontWeight: 'bold',
							color: 'white',
						}}
					>
						{step === 1
							? 'Already have an account?:'
							: 'Personal Data:'}
					</Typography>
					<form
						className={classes.form}
						noValidate
						onSubmit={onSubmit}
					>
						<Grid container spacing={2}>
							{step === 1 ? (
								<>
									<Grid item xs={12}>
										<div className={styles.textField}>
											<span className={styles.label}>
												Email:
											</span>
											<input
												className={styles.input}
												type="text"
												value={mail}
												onChange={changeMailHandle}
											/>
										</div>
									</Grid>
									<Grid item xs={12}>
										<div className={styles.textField}>
											<span className={styles.label}>
												Name:
											</span>
											<input
												className={styles.input}
												type="text"
												value={name}
												onChange={changeNameHandle}
												onKeyPress={(event) => {
													if (event.charCode === 13) {
														event.preventDefault()
														if (
															name.length > 0 &&
															mail.length > 0
														)
															setStep(2)
													}
												}}
											/>
										</div>
									</Grid>
								</>
							) : (
								<>
									<Grid item xs={12}>
										<div className={styles.textField}>
											<span className={styles.label}>
												Gender
											</span>
											<select
												className={styles.input}
												style={{
													padding: 0,
													height: '40px',
													textIndent: '8px',
												}}
												value={sex}
												onChange={changeSexHandle}
											>
												{sexList.map((option) => (
													<option
														key={option.value}
														value={option.value}
													>
														{option.label}
													</option>
												))}
											</select>
										</div>
									</Grid>
									<Grid item xs={12}>
										<div className={styles.textField}>
											<span className={styles.label}>
												Weight:
											</span>
											<input
												className={styles.input}
												type="number"
												value={
													weight === 0 ? '' : weight
												}
												onChange={changeWeightHandle}
											/>
										</div>
									</Grid>
									<Grid item xs={12}>
										<div className={styles.textField}>
											<span className={styles.label}>
												Height:
											</span>
											<input
												className={styles.input}
												type="number"
												value={
													height === 0 ? '' : height
												}
												onChange={changeHeightHandle}
											/>
										</div>
									</Grid>
									<Grid item xs={12}>
										<div className={styles.textField}>
											<span className={styles.label}>
												Age:
											</span>
											<input
												className={styles.input}
												type="number"
												value={age === 0 ? '' : age}
												onChange={changeAgeHandle}
												onKeyPress={(event) => {
													if (event.charCode === 13) {
														if (
															name.length > 0 &&
															mail.length > 0 &&
															sex.length > 0 &&
															height > 0 &&
															weight > 0 &&
															age > 0
														) {
															setUserData({
																name,
																mail,
																sex,
																weight,
																height,
																age,
															})
															setHaveUserData()
															push('/main')
														} else {
															alert(
																'Для продолжения необходимо заполнить все поля'
															)
														}
													}
												}}
											/>
										</div>
									</Grid>
								</>
							)}
						</Grid>
						{step === 1 ? (
							<Button
								type="button"
								fullWidth
								variant="contained"
								color="secondary"
								className={classes.submit}
								onClick={(e) => {
									e.preventDefault()
									if (name.length > 0 && mail.length > 0)
										setStep(2)
								}}
							>
								Ok
							</Button>
						) : (
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="secondary"
								className={classes.submit}
							>
								Ok
							</Button>
						)}
					</form>
				</div>
			</Container>
		</div>
	)
}

export default SignUpPage
