import React from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
			<div className="container login">
				<div className="login-title">Login to Tik-Tok</div>
				<div className="login-input-field"><input type="text" placeholder="Username"/></div>
				<div className="login-input-field"><input type="password" placeholder="Password"/></div>
				<button type="button" className="login-button">Log in</button>
				<div className="login-authorize"><div>Don’t have an account?  </div><Link to='/signup' className="login-authorize-text">Sign up</Link></div>
			</div>
		)
}

export default Login