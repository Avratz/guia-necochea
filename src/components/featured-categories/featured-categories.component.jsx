import React from 'react'

import FeaturedCategory from './featured-category/featured-category.component'
import './featured-categories.styles.sccs'


export default function FeaturedCategories() {
	return (
		<section className="featured-categories container">
			<h2>Categorias Populares</h2>
			<ul>
				<FeaturedCategory cat='Restaurantes' />
				<FeaturedCategory cat='Ferreterias' />
			</ul>
		</section>
	)
}
