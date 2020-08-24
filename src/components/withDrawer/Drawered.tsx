import React, { useState } from 'react'
import clsx from 'clsx'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { createStyles, Theme } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import OpacityIcon from '@material-ui/icons/Opacity'
import HelpIcon from '@material-ui/icons/Help'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import Fab from '@material-ui/core/Fab'
import PersonIcon from '@material-ui/icons/Person'
import AppBar from '@material-ui/core/AppBar'
import WarningIcon from '@material-ui/icons/Warning'
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode'
import MiniMenu from '../MiniMenu/MiniMenu'
import styles from './drawered.module.scss'

const drawerWidth = 250

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		appBar: {
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		hide: {
			display: 'none',
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		drawerHeader: {
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(0, 1),
			// necessary for content to be below app bar
			...theme.mixins.toolbar,
			justifyContent: 'space-between',
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		contentShift: {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		},
	})
)

const Drawered = ({
	WrappedComponent,
	closeDrawer,
	isDrawerOpen,
	openDrawer,
	push,
	name,
}: any) => {
	const classes = useStyles()

	const handleDrawerClose = () => {
		closeDrawer()
	}

	const [miniMenuOpen, setMiniMenuOpen] = useState(false)

	return (
		<div className={styles.withDrawerParent}>
			<AppBar
				style={{ boxShadow: 'none', backgroundColor: 'white' }}
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: isDrawerOpen,
				})}
			>
				<MiniMenu miniMenuOpen={miniMenuOpen} push={push} />
				<Toolbar style={{ justifyContent: 'space-between' }}>
					<IconButton
						color="primary"
						aria-label="open drawer"
						onClick={openDrawer}
						edge="start"
						className={clsx(
							classes.menuButton,
							isDrawerOpen && classes.hide
						)}
					>
						<MenuIcon />
					</IconButton>
					{isDrawerOpen && <span />}
					<div className={styles.avatar}>
						<Fab
							size="large"
							color="primary"
							aria-label="add"
							onClick={() => setMiniMenuOpen(!miniMenuOpen)}
						>
							<PersonIcon />
						</Fab>
						<span className={styles.name}>{name}</span>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={isDrawerOpen}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<div className={classes.drawerHeader}>
						{/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
						<img
							src="C2.png"
							alt="logo"
							style={{
								height: '34px',
								marginLeft: '16px',
								cursor: 'pointer',
							}}
							onClick={() => push('/main')}
						/>
						<IconButton onClick={() => handleDrawerClose()}>
							<ChevronLeftIcon className={styles.arrow} />
						</IconButton>
					</div>
				</div>
				<div className={styles.dividerLine}>
					<span />
				</div>
				<div className={styles.divider}>
					<List>
						<ListItem
							button
							key="Сообщения"
							onClick={() => push('/chat')}
						>
							<ListItemIcon>
								<MailOutlineIcon className={styles.arrow} />
							</ListItemIcon>
							<ListItemText
								primary="Сообщения"
								style={{ color: 'white', fontWeight: 'bold' }}
							/>
						</ListItem>
						<ListItem
							button
							key="Риски"
							onClick={() => push('/risks')}
						>
							<ListItemIcon>
								<WarningIcon className={styles.arrow} />
							</ListItemIcon>
							<ListItemText
								primary="Риски"
								style={{ color: 'white', fontWeight: 'bold' }}
							/>
						</ListItem>
						<ListItem
							button
							key="Анализы"
							onClick={() => push('/myData')}
						>
							<ListItemIcon>
								<OpacityIcon className={styles.arrow} />
							</ListItemIcon>
							<ListItemText
								primary="Данные"
								style={{ color: 'white', fontWeight: 'bold' }}
							/>
						</ListItem>
						<ListItem button key="Новости">
							<ListItemIcon>
								<ChromeReaderModeIcon
									className={styles.arrow}
								/>
							</ListItemIcon>
							<ListItemText
								primary="Новости"
								style={{ color: 'white', fontWeight: 'bold' }}
							/>
						</ListItem>
					</List>
					<div>
						<div className={styles.dividerLine}>
							<span />
						</div>
						<List>
							<ListItem button key="Вопросы">
								<ListItemIcon>
									<HelpIcon className={styles.arrow} />
								</ListItemIcon>
								<ListItemText
									primary="Вопросы"
									style={{
										color: 'white',
										fontWeight: 'bold',
									}}
								/>
							</ListItem>
						</List>
					</div>
				</div>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: isDrawerOpen,
				})}
			>
				<WrappedComponent />
			</main>
		</div>
	)
}

export default Drawered
