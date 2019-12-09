import React from 'react'

import './category.styles.scss'


export default function FeaturedCategory({cat}) {
	return (
		<li className="featured-category">
			<p>{cat}</p>
		</li>
	)
}
