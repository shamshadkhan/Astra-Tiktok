import React, {useEffect,useState} from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import Posts from '../Components/Posts'
import postApi from '../utils/postApi'

const Home = () => {

	const [postList, setPostList] = useState([]);
	const [suggestionList, setSuggestionList] = useState([]);
	const [followerList, setFollowerList] = useState([]);
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

	 const setData = () => {
	 	const following = postList.filter(post => post.is_followed === true)
	    setFollowerList(following.sort((a, b) => a.likes < b.likes ? 1 : -1))

	    const follow = postList.filter((post) => post.is_followed === false)
	    setSuggestionList(follow.sort((a, b) => a.likes < b.likes ? 1 : -1))
	 }

	  useEffect(() => {
	    getRestPost();
	  }, []);

	  useEffect(() => {
	    setData();
	  }, [postList]);

	return (
			<div className="container">
				<LeftSideBar suggestions={suggestionList} followers={followerList}/>
				<Posts postList={postList} setUserToToggle={(userToToggle) => setUserToToggle(userToToggle)}/>
			</div>
		)
}

export default Home