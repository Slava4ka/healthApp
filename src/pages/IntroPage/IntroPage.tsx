import React from 'react'
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { LocationState, Path } from 'history'
import { CallHistoryMethodAction } from 'connected-react-router'
import style from './introPage.module.scss'
import CustomButton from '../../components/CustomButton/CustomButton'
import NewLoader from '../../components/NewLoader/NewLoader'
import BigCustomButton from '../../components/CustomButton/BigCustomButton'

interface IIntroPage {
	push: (path: Path, state?: LocationState) => CallHistoryMethodAction;
}

const IntroPage = ({ push }: IIntroPage) => {
	return (
		<div className={style.introPage}>
			<div className={style.header}>
				<div className={style.logo}>
					<img src="C2.png" alt="logo of mday" />
				</div>
				<div className={style.buttonGroup}>
					<Button
						color="primary"
						onClick={() => push('/registration')}
					>
						Log in
					</Button>
					<CustomButton
						variant="contained"
						color="primary"
						disableRipple
						onClick={() => push('/registration')}
					>
						Sing up
					</CustomButton>
				</div>
			</div>

			<div className={style.animation}>
				<NewLoader />
			</div>
			<div className={style.label}>
				<h1 style={{ marginTop: 0, marginBottom: 0 }}>
					All experience of world healthcare
				</h1>
				<h1 style={{ marginTop: 0 }}>in your hands</h1>
			</div>
			<div className={style.usersActionPanel}>
				<BigCustomButton
					variant="contained"
					color="primary"
					disableRipple
					onClick={() => push('/registration')}
				>
					Sing up
				</BigCustomButton>
				<span className={style.signIn}>
					{`Already have an account? `}
					<NavLink to="/registration">Log in</NavLink>
				</span>
			</div>
		</div>
	)
}

export default IntroPage
