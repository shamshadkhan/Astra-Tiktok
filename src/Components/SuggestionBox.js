import React from 'react'
import MiniCard from './MiniCard'

const SuggestionBox = (props) => {
  const {suggestionsUser} = props
  return (
    <div className="followers-column">
      <hr />
      <p className="title">Suggested accounts</p>
      {suggestionsUser && suggestionsUser.map((user, index) => (
        <MiniCard 
            key={index} user={user}
        />))}
      <hr />
    </div>
  )
}
  
export default SuggestionBox

