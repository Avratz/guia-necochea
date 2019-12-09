import React from 'react'

import './featured-category.styles.scss'


export default function FeaturedCategory({cat}) {
	return (
		<li className="featured-category">
			<i>#</i>
			<p>{cat}</p>
		</li>
	)
}
