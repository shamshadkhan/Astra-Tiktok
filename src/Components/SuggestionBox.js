import React from 'react'
import MiniCard from './MiniCard'

const SuggestionBox = (props) => {
  const {suggestionsUser} = props
  const uniquesuggestionsUser = suggestionsUser.filter((user,index) =>
    suggestionsUser.findIndex(obj => obj.username === user.username) ===index)
  return (
    <div className="followers-column">
      <hr />
      <p className="title">Suggested accounts</p>
      {uniquesuggestionsUser && uniquesuggestionsUser.map((user, index) => (
        <MiniCard 
            key={index} user={user}
        />))}
      <hr />
    </div>
  )
}
  
export default SuggestionBox

