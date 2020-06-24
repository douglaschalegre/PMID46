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
							<h4 className="icons-space">Sair</h4>
						</Link>
					</div>
				</div>
			</header>

			<main>
				<div>
					<h1>Bem vindo, Douglas!</h1>
					<Link to="/admin/cadastrar">
						<span>Adicionar aluno</span>
						</Link>
					</div>
			</main>
		</div>
	</div>
	)
}

export default LandingPage;