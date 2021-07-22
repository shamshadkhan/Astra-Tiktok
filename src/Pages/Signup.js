import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import userApi from '../utils/userApi'
import salt from '../utils/salt'
import uuid from 'node-uuid'

const Signup = () => {

	const [name, setName] = useState("")
	const [username, setUsername] = useState("")
	const [avatar, setAvatar] = useState("")
	const [password, setPassword] = useState("")
	const [userList, setUserList] = useState("")
	const [message, setMessage] = useState("")
	const [messageClass, setMessageClass] = useState("")

	const clearState = () => {
		setName("")
		setUsername("")
		setAvatar("")
		setPassword("")
	}

	const addRestUser = async () => {
	    const item = {
	      id: uuid.v1(),
	      name: name,
	      username: username,
	      password: salt.hashPassword(password),
	      avatar: avatar,
	      following: 0,
	      likes: 0,
	      follower: 0
	    }
	    await userApi.getRestUser().then((userList) => {
	    	const userExists = ( userList.filter(user => user.username.localeCompare(item.username) === 0))
	    	if(userExists.length==0) {
	    		setMessage("User Created")
	    		setMessageClass("success")
	    		userApi.addRestUser(item)
	    		clearState()
	    	}
	    	else {
	    		setMessageClass("error")
	    		setMessage("User Already Exists")
	    	}
	    });
  	};

	return (
			<div className="container login">
				<div className="login-title">Signup to Tik-Tok</div>
				<p className={messageClass}>{message}</p>
				<div className="login-input-field">
					<input type="text" placeholder="Fullname" value={name} onChange={(e)=>setName(e.target.value)}/>
				</div>
				<div className="login-input-field">
					<input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
				</div>
				<div className="login-input-field">
					<input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
				</div>
				<div className="login-input-field">
					<input type="text" placeholder="Avatar Url" value={avatar} onChange={(e)=>setAvatar(e.target.value)}/>
				</div>
				<button type="button" className="login-button" onClick={()=>addRestUser()} disabled={(!name||!username||!password||!avatar)?"disabled":""}>Signup</button>
				<div className="login-authorize">
					<div>Already have an account?  </div>
					<Link to='/login' className="login-authorize-text">Login</Link>
				</div>
			</div>
		)
}

export default Signup