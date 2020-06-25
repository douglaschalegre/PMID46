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
					<Link to="/admin/cadastro">
						<h4>Adicionar aluno</h4>
						<FiPlus size={48} className="icons-space"/>
					</Link>
				</div>
				<div>
					<div className="content-component">
						<div className="content-header">
							<h4>Alunos</h4>
							<div>
								<input type="tel" maxLength={10} placeholder="Matricula"/>
								<FiSearch size={12} className="icon-search"/>
							</div>
						</div>
						<div className="content-data">
							<p>Douglas Chalegre</p>
							<p>douglas.chalegre@gmail.com</p>
							<p>9999999999</p>
						</div>
					</div>
					<div className="content-component">
						<div className="content-header">
							<h4>Pacientes</h4>
							<div>
								<input type="text" placeholder="Nome"/>
								<FiSearch size={12} className="icon-search"/>
							</div>
						</div>
						<div className="content-data">
							<p>Matheus Costa</p>
							<p>Dentistica</p>
							<p>11</p>
							<p>8298214848</p>
							<p>Não atendido</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
	)
}

export default LandingPage;