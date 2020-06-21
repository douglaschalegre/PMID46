import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './styles.css'
import logo from '../../assets/logo.svg';

const LandingPage = () => {
	return(
		<div id="page-home">
			<div className="content">
				
				<header>
					<div className="header">
						<div className="center-label">
							<img src={logo} alt="PMID46" width="48" height="48"/>
							<span>PMID46</span>
						</div>

						<div className="center-label">
							<Link to="/admin/login">
								<span><FiLogIn size={48}/></span>
								<strong>Entrar</strong>
							</Link>
						</div>
					</div>
				</header>

				<main>
					<h1>Gerencie com facilidade seus cadastros.</h1>
					<p>Entre para ter acesso ao painel</p>

				</main>
			</div>
	  </div>
	)
}

export default LandingPage;