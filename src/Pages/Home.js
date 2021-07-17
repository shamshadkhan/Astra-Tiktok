import React, {useEffect,useState} from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import Posts from '../Components/Posts'
import postApi from '../utils/postApi'

const Home = () => {

	const [postList, setPostList] = useState([]);
	const [suggestionList, setSuggestionList] = useState([]);
	const [followerList, setFollowerList] = useState([]);

  	const getRestPost = async () => {
	    const posts = postApi.getRestPost().then((postList) => setPostList( postList.sort((a, b) => a.id < b.id ? 1 : -1) ));
	    const following = postList.filter(post => post.is_followed === true)
	    setFollowerList(following.sort((a, b) => a.likes < b.likes ? 1 : -1))

	    const follow = postList.filter((post) => post.is_followed === false)
	    setSuggestionList(follow.sort((a, b) => a.likes < b.likes ? 1 : -1))
	 };

  useEffect(() => {
    getRestPost();
  }, []); 
	return (
			<div className="container">
				<LeftSideBar suggestions={suggestionList} followers={followerList}/>
				<Posts postList={postList}/>
			</div>
		)
}

export default Home