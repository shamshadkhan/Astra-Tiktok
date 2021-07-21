import React,{useState} from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import Posts from '../Components/Posts'
import postApi from '../utils/postApi'
import uuid from 'node-uuid'

const Upload = () => {
	const name = "Monjur Morshed"
	const username = "monjur1988"
	const avatar = "https://i.imgur.com/6auMnvh.jpg"
	const [video, setVideo] = useState(null)
  	const [caption, setCaption] = useState(null)

	const addRestPost = async (text) => {
	    const item = {
	      id: uuid.v1(),
	      name: name,
	      username: username,
	      avatar: avatar,
	      is_followed: false,
	      video: video,
	      caption: caption,
	      likes: 0,
	      comments: 0,
	      shares: 0,
	      timestamp: new Date().toISOString(),
	      button_visible: true,
	    }
	    await postApi.addRestPost(item);
  };

	return (
			<div className="upload-page">
		        <br />
		        <h1>Upload video</h1>
		        <p>This video will be published to @{username}</p>
		        <div className='container'>
		          <form onSubmit={addRestPost}>
		            <div className='section'>
		              <div className="image-upload"></div>
		              <div className="form-section">
		                <div className='section input-section'>
		                  <label className="bold">Caption</label>
		                  <input
		                    className='input'
		                    name='caption'
		                    onChange={(e) => setCaption(e.target.value)}
		                  />
		                </div>
		                <div className="break"></div>
		                <div className='section input-section'>
		                  <label className="bold">Video Url</label>
		                  <input
		                    className='input'
		                    name='video'
		                    onChange={(e) => setVideo(e.target.value)}
		                  />
		                </div>
		              </div>
		            </div>			
		            <button>Post</button>
		          </form>
		        </div>
		    </div>
		)
}

export default Upload