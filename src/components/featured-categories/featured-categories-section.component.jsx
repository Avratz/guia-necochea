import React from 'react'

import FeaturedCategory from './featured-category/featured-category.component'
import './featured-categories-section.styles.scss'


export default function FeaturedCategoriesSection() {
	return (
		<section className="featured-categories container">
			<h2 className='h2-home'>Categorias Populares</h2>
			<ul class="featured-categories-list">
				<FeaturedCategory cat='Restaurantes' />
				<FeaturedCategory cat='Ferreterias' />
			</ul>
		</section>
	)
}
