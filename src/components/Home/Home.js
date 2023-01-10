import React from 'react'
import bake from '../../assets/img/bake.jpg'
import cake from '../../assets/img/cake.jpg'
import { SELECT_INGREDIENT } from '../../util/routes'
import { Link } from 'react-router-dom'

const Home = ({ t }) => {
	return (
		<div className="home" data-testid="Home">
			<div className="hey-user">{t('home.hey-baker')}</div>
			<div className="welcome-to">{t('home.welcome-title')}</div>
			<div className="cards-warp">
				<Link className="insurer-card" to={SELECT_INGREDIENT}>
					<div className="insurer-card-icon">
						<img className="fit-picture" src={bake} alt="" />
					</div>
					<div className="insurer-card-title">{t('add.title')}</div>
				</Link>
				<div className="insurer-card">
					<div className="insurer-card-icon my-deals">
						<img className="fit-picture" src={cake} alt="" />
					</div>
					<div className="insurer-card-title">{t('home.bakes')}</div>
				</div>
			</div>
		</div>
	)
}

export default Home
