import React from 'react'
import Card from './Card'

const Posts = (props) => {
	const {postList} = props
	return (
			<div className="feeds">
				{postList.map((post, index) => (
		            <Card
		              key={index}
		              post={post}
		            />
		         ))}
			</div>
		)
}

export default Posts
