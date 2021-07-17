import React from 'react'
import MicroCard from './MicroCard'

const FollowersBox = (props) => {
  const {followersUser} = props

  return (
    <div className="followers-column">
      <hr />
      <p className="title">Following accounts</p>
      {followersUser && followersUser.map((user, index) => (
        <MicroCard 
            key={index} user={user}
        />))}
      <hr />
    </div>
  )
}

export default FollowersBox