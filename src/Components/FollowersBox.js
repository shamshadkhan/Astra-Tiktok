import React from 'react'
import MicroCard from './MicroCard'

const FollowersBox = (props) => {
  const {followersUser} = props
  const uniquefollowersUser = followersUser.filter((user,index) =>
    followersUser.findIndex(obj => obj.username === user.username) ===index)
  return (
    <div className="followers-column">
      <hr />
      <p className="title">Following accounts</p>
      {uniquefollowersUser && uniquefollowersUser.map((user, index) => (
        <MicroCard 
            key={index} user={user}
        />))}
      <hr />
    </div>
  )
}

export default FollowersBox