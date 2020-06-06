import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { RootState } from '../../store/reducers'

const Protected = ({ Page, haveUserData, location }: any) => {
	if (!haveUserData) {
		return (
			<Redirect
				to={{
					pathname: '/healthApp/',
					state: { from: location.pathname },
				}}
			/>
		)
	} else {
		return <Page />
	}
}

const mapStateToProps = (state: RootState) => ({
	haveUserData: state.app.haveUserData,
	location: state.router.location,
})

export default connect(mapStateToProps)(Protected)
