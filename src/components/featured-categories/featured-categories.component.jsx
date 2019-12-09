import React from 'react'

import FeaturedCategory from './featured-category/featured-category.component'
import './featured-categories.styles.scss'


export default function FeaturedCategories() {
	return (
		<section className="featured-categories container">
			<h2>Categorias Populares</h2>
			<ul class="featured-categories-list">
				<FeaturedCategory cat='Restaurantes' />
				<FeaturedCategory cat='Ferreterias' />
			</ul>
		</section>
	)
}
