import React from 'react'

const Card = ({ post, toggleFollow }) => {

  const timestamp = post.timestamp
  const timeStampReformat = timestamp.slice(2, 7)

  return (
    <div className="card">
      <div className="break" />
        <div className="section">
          <div className="user-info">
            <img className="user-profile"  src={post.avatar} width={'100%'} />
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
           <i class="far fa-heart"></i>
          <div className="social-tag">{post.likes}</div>
          <i class="far fa-comment-dots"></i>
          <div className="social-tag">{post.comments}</div>
          <i class="far fa-share-square"></i>
        </div>
    </div>
  )
}

export default Card