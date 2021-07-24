import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
	const user = JSON.parse(localStorage.getItem('user'))
	return (
		<div className="header">
			<Link to='/'>
	        	<div className="logo"></div>
	      	</Link>
			<div className="upload-container">
				<div className="section">
				{
					user && (
							<>
							<Link to='/upload'>
								<div className="upload" />
							</Link>
							<Link to='/profile'>
								<img className="personal" src={user.avatar} alt="avatar"/>
							</Link>  
							</>
						)
				}				  
				</div>
			</div>
		</div>
		)
}

export default Header