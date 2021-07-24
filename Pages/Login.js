import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import userApi from '../utils/userApi'
import salt from '../utils/salt'

const Login = () => {

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [message, setMessage] = useState("")
	const [messageClass, setMessageClass] = useState("")
	let history = useHistory();
	const validateUser = async () => {
	    await userApi.getRestUser().then((userList) => {
	    	const userExists = ( userList.filter(user => user.username.localeCompare(username) === 0))
	    	const validate = userExists.length>0 ? salt.validatePassword(password,userExists[0].password.hash,userExists[0].password.salt):false
	    	if(userExists.length ===0 || !validate) {
	    		setMessage("Authentication Failed")
	    		setMessageClass("error")
	    	}
	    	else {
	    		setMessageClass("success")
	    		setMessage("Authentication Success")
	    		localStorage.setItem('user', JSON.stringify(userExists[0]));
	    		history.push('/')
	    	}
	    });
  	};

	return (
			<div className="container login">
				<div className="login-title">Login to Tik-Tok</div>
				<p className={messageClass}>{message}</p>
				<div className="login-input-field">
					<input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
				</div>
				<div className="login-input-field">
					<input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
				</div>
				<button type="button" className="login-button" onClick={()=>validateUser()} disabled={(!username||!password)?"disabled":""}>Log in</button>
				<div className="login-authorize"><div>Don’t have an account?  </div><Link to='/signup' className="login-authorize-text">Sign up</Link></div>
			</div>
		)
}

export default Login