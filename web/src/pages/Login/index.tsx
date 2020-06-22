import React from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './styles.css'
import logo from '../../assets/logo.svg';


const LandingPage = () => {
	return(
	<div id="page-login">
		<div className="content">
			
			<header>
				<div className="header">
					<div>
						<img src={logo} alt="PMID46" width="48" height="48"/>
						<h2 className="icons-space">PMID46</h2>
					</div>

					<div>
						<Link to="/admin">
							<FiArrowLeft size={48}/>
						</Link>
					</div>
				</div>
			</header>

			<main>
				<div className="backgroud">
					<div className="container-login-form">
						<h6>Login</h6>
						<form>
							<div>
								<label>Login</label>
								<input/>
							</div>
							<div>
								<label>Senha</label>
								<input/>
							</div>
							<button>Entrar</button>
						</form>
					</div>
				</div>
			</main>
		</div>
	</div>
	)
}

export default LandingPage;