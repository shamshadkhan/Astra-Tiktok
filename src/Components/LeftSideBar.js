import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import SuggestionBox from './SuggestionBox'
import FollowersBox from './FollowersBox'


const LeftSideBar = (props) => {
	const {suggestions,followers,profile} = props
	let history = useHistory();

	const userLogout = () => {
		localStorage.clear();
	    history.push('/login')
  	};

	return (
			<div className="left-sidebar">
				<div className="menu">
					<div className="menu-section">
						<Link to='/'>
							<div className="home" />
							<h2 className="bold red">For You</h2>
						</Link>
					</div>
					<div className="menu-section">
						<Link to='/'>
							<div className="following" />
							<h2>Following</h2>
						</Link>
					</div>
					{
						profile && (
							<div className="menu-section" onClick={()=>userLogout()}>
							<i class="fas fa-sign-out-alt fa-lg"></i>
								<h2>Logout</h2>
							</div>
						)
					}
					
				</div>
				{
					suggestions && <SuggestionBox suggestionsUser={suggestions}/>
				}
				{
					followers && <FollowersBox followersUser={followers}/>
				}
				
			</div>
		)
}

export default LeftSideBar