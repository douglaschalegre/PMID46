import React from 'react';
import { FiArrowLeft, FiLock, FiKey } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './styles.css'
import logo from '../../assets/logo.svg';
import useAuth from '../../contexts/auth';


const LandingPage = () => {
	const {auth, signIn} = useAuth();
	console.log(auth);
	
	async function handleSignIn(){
		await signIn();
	}

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
					<div className="container-login-form">
						<h2>Login</h2>
						<form>
							<div>
								<label>Login</label>
								<FiLock className="icon-left" size={24}/>
								<input type="text"/>
							</div>
							<div>
								<label>Senha</label>
								<FiKey className="icon-left" size={24}/>
								<input type="password"/>
							</div>
							<div className="login-btn">
								<Link to="/admin/painel">
									<button onClick={handleSignIn}>Entrar</button>
								</Link>
							</div>
						</form>
					</div>
			</main>
		</div>
	</div>
	)
}

export default LandingPage;