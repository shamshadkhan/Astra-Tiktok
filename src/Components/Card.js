import React from 'react'

const Card = ({ post, toggleFollow }) => {

  const timestamp = post.timestamp
  const timeStampReformat = timestamp.slice(0, 10)

  return (
    <div className="card">
      <div className="break" />
        <div className="section">
          <div className="user-info">
            <img className="user-profile"  src={post.avatar} width={'100%'}  alt="avatar"/>
            <div>
            <div className="section">
              <h3 className="bold">{post.username}</h3>
              <p className="username">{post.name}</p>
              <p>{timeStampReformat}</p>
            </div> 
            </div>
          </div>
          {post.button_visible && <div className={post.is_followed? "followed-button" : "follow-button"}
            onClick={() => toggleFollow(post)}>
              {post.is_followed? "Following": "Follow"}
          </div>}
        </div>
        <div className="vediosection">
        <p>{post.caption}</p>
        <video className="video" controls>
          <source src={post.video} type="video/mp4" />
        </video>
        </div>
        <div className="section socials">
          <div className="socials-block">
            <div className="socials-block-circle">
              <i class="fas fa-heart fa-2x"></i>
            </div>
            <div className="social-tag">{post.likes}</div>
          </div>
          <div className="socials-block">
            <div className="socials-block-circle">
              <i class="fas fa-comment-dots fa-2x"></i> 
            </div>
            <div className="social-tag">{post.comments}</div>
          </div>
          <div className="socials-block">
            <div className="socials-block-circle">
              <i class="fas fa-share fa-2x"></i>
            </div>
            <div className="social-tag">{post.shares}</div>
          </div>
        </div>
    </div>
  )
}

export default Card