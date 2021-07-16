import React, {useEffect,useState} from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import Posts from '../Components/Posts'
import Header from '../Components/Header'
import postApi from '../utils/postApi'

const Home = () => {

	const [postList, setPostList] = useState([]);

  	const getRestPost = async () => {
	    postApi.getRestPost().then((postList) => setPostList( postList ));
	 };

  useEffect(() => {
    getRestPost();
  }, []); 
	return (
			<div className="page">
				<Header/>
				<div className="container">
					<LeftSideBar/>
					<Posts postList={postList}/>
				</div>
			</div>
		)
}

export default Home