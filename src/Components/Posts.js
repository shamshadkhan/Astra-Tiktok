import React from 'react'
import Card from './Card'

const Posts = (props) => {
	const {postList,setUserToToggle} = props
	return (
			<div className="feeds">
				{postList.map((post, index) => (
		            <Card
		              key={index}
		              post={post}
		              toggleFollow={setUserToToggle}
		            />
		         ))}
			</div>
		)
}

export default Posts
