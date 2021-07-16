import React from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import Posts from '../Components/Posts'
import Header from '../Components/Header'
const Login = () => {
	return (
			<div className="page">
				<Header/>
				<div className="container">
					<LeftSideBar/>
					Login
					<Posts/>
				</div>
			</div>
		)
}

export default Login