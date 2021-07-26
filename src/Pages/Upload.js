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
		<div className="container">	
			<div className="upload-page">
		        <br />
		        <h1>Upload video</h1>
		        <p>This video will be published to @{user.username}</p>
		        <div className='upload-block'>
		            <div className='section'>
		            	{
		            		video ?
		            		(
		            			<video className="video" controls>
						          <source src={video} type="video/mp4" />
						        </video>
							    
		            		)
		            		:
		            		(
			            		<img src="https://i.imgur.com/woseSJL.png" alt="upload" className="upload-image"/>
		            		)
		            	}
		            </div>

					<div className="upload-form-section">
						<div className='section input-section'>
						     <div className="upload-input-field">
								<input type="text" placeholder="Caption" value={caption} onChange={(e)=>setCaption(e.target.value)}/>
							</div>
							<div className="upload-input-field">
								<input type="text" placeholder="Video Url" value={video} onChange={(e)=>setVideo(e.target.value)}/>
							</div>
						</div>
		            	<button className="upload-button" onClick={() => addRestPost()} disabled={(!caption||!video)?"disabled":""}>Post</button>
					</div>
		        </div>
		    </div>
		</div>
		)
}

export default Upload
