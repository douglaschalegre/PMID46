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
            <img src={logo} alt="PMID46" width="48" height="48"/>
				</header>

				<main>
					<h1>Gerencie com facilidade seus cadastros.</h1>
					<p>Entre para ter acesso ao painel</p>
					<Link to="/admin/login" >
							<span><FiLogIn/></span>
							<strong>Entrar</strong>
						</Link>
				</main>
			</div>
	  </div>
	)
}

export default LandingPage;