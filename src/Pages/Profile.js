import React, {useEffect,useState} from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import MicroCard from '../Components/MicroCard'
import postApi from '../utils/postApi'

const Home = () => {

	const [postList, setPostList] = useState([]);
	const [followerList, setFollowerList] = useState([]);
	const [vedioUserList, setVedioUserList] = useState([]);
	const user = {
		name: "Shamshad Akther",
		username: "Shamshad1990",
		avatar: "https://i.imgur.com/glt7Xdr.jpg",
		following: 0,
		follower: 0,
		likes: 0
	}
  	const getRestPost = async () => {
	    const posts = postApi.getRestPost().then((postList) => setPostList( postList));
	 };

	 const setData = () => {
	 	const following = postList.filter(post => post.is_followed === true)
	    setFollowerList(following.sort((a, b) => a.likes < b.likes ? 1 : -1))
	    const uservedio = postList.filter(post => post.username.localeCompare("shamshad1990") === 0)
	    setVedioUserList(uservedio.sort((a, b) => a.likes < b.likes ? 1 : -1))
	 }

	  useEffect(() => {
	    getRestPost();
	  }, []);

	  useEffect(() => {
	    setData();
	  }, [postList]);

	return (
			<div className="container profile">
				<LeftSideBar followers={followerList}/>
				<div className="user-profile-block">
					<div className="profile-microcard">
				        <MicroCard 
				            user={user}
				        />
					</div>
					<h2 class="count-infos">
						<div class="number">
							<strong title="Following">{user.following}</strong><span class="unit">Following</span>
						</div>
						<div class="number">
							<strong title="Followers">{user.follower}</strong><span class="unit">Followers</span>
						</div>
						<div class="number">
							<strong title="Likes">{user.likes}</strong><span class="unit">Likes</span>
						</div>
					</h2>
					<div className="videos-block">
						<p className="active">Videos</p>
						<div className="videos-list">
						{
							vedioUserList.map((user,index) => (
								<video className="profile-vedio" controls>
						          <source src={user.video} type="video/mp4" />
						        </video>
								))
						}
						</div>
					</div>
				</div>
			</div>
		)
}

export default Home