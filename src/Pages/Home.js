import React, {useEffect,useState} from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import Posts from '../Components/Posts'
import postApi from '../utils/postApi'

const Home = () => {

	const [postList, setPostList] = useState([]);
	let suggestionList = [];
	let followerList = [];
  	const [userToToggle, setUserToToggle] = useState(null);

  	const getRestPost = async () => {
	    postApi.getRestPost().then((postList) => setPostList( postList.sort((a, b) => a.timestamp < b.timestamp ? 1 : -1) ));
	 };

	if(userToToggle) {
		const newValue = userToToggle.is_followed ? false : true
		const item = {
			id: userToToggle.id,
			data: {is_followed: newValue}
		}
		console.log(item)
		postApi.updateRestPost(item).then(() => getRestPost())
		setUserToToggle(null);
	}

	useEffect(() => {
		getRestPost();
	}, []);

	if(postList) {
		const following = postList.filter(post => post.is_followed === true)
		followerList=(following.sort((a, b) => a.likes < b.likes ? 1 : -1))

		const follow = postList.filter((post) => post.is_followed === false)
		suggestionList=(follow.sort((a, b) => a.likes < b.likes ? 1 : -1))
	};

	return (
			<div className="container">
				<LeftSideBar suggestions={suggestionList} followers={followerList}/>
				<Posts postList={postList} setUserToToggle={(userToToggle) => setUserToToggle(userToToggle)}/>
			</div>
		)
}

export default Home