import React from 'react';
import { FiLogOut, FiPlus, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './styles.css'
const LandingPage = () => {
	return(
	<div id="page-admin">
		<div className="content">
			
			<header>
				<div className="header">
					<div>
						<img src={logo} alt="PMID46" width="48" height="48"/>
						<h2 className="icons-space">PMID46</h2>
					</div>

					<div>
						<Link to="/admin">
							<FiLogOut size={48}/>
							<strong className="icons-space">Sair</strong>
						</Link>
					</div>
				</div>
			</header>

			<main>


			</main>
		</div>
	</div>
	)
}

export default LandingPage;