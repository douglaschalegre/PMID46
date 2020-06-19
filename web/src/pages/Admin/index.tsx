import React from 'react';
import { FiLogOut, FiPlus, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './styles.css'
const LandingPage = () => {
	return(
		<>
		<header>	
       <span>
				<img src={logo} alt="PMID46" width="48" height="48"/>
				PMID46
       </span>
			<Link to="/admin">
				<span><FiLogOut/></span>
				<strong>Sair</strong>
			</Link>
		</header>

		<div>
			<h1>Bem vindo, Douglas!</h1>
			<Link to="/admin/cadastro">
				<strong>Cadastrar novo aluno</strong>
				<span><FiPlus/></span>
			</Link>
		</div>

		<div className='white-box'>
			<p>teste</p>
			<span>
				<input placeholder="Matricula"/>
				<FiSearch/>
			</span>
			
		</div>

		</>
	)
}

export default LandingPage;