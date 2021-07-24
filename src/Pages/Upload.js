import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import postApi from '../utils/postApi'
import uuid from 'node-uuid'

const Upload = () => {
	const [video, setVideo] = useState(null)
  	const [caption, setCaption] = useState(null)
  	const user = JSON.parse(localStorage.getItem('user'))
	let history = useHistory();

	const addRestPost = async (text) => {
	    const item = {
	      id: uuid.v1(),
	      name: user.name,
	      username: user.username,
	      avatar: user.avatar,
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
	    history.push('/')
  };

	return (
			<div className="upload-page">
		        <br />
		        <h1>Upload video</h1>
		        <p>This video will be published to @{user.username}</p>
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