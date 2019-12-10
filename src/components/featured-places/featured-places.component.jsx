import React from 'react'

import FeaturedPlaceWide from './featured-place-wide/featured-place-wide.component'
import FeaturedPlaceSmall from './featured-place-small/featured-place-small.component'

import './featured-places.styles.scss'

export default function Places() {
	return (
		<section className="places container">
			<h2 className="h2-home">Lugares Destacados</h2>
			<FeaturedPlaceWide 
				imgUrl="https://www.diario4v.com/u/fotografias/fotosnoticias/2019/8/3/30199.jpg" 
				placeTitle="Escollera Sur" 
				placeDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas velit fugit explicabo dolorem eius consequatur sapiente? Ab consequuntur eum consectetur praesentium maxime id, dolore distinctio placeat eligendi reprehenderit est culpa."
				placeSlug='/'
				/>

			<div className="featured-places-small">
			<FeaturedPlaceSmall 
				imgUrl="https://www.diario4v.com/u/fotografias/fotosnoticias/2017/4/19/17979.jpg" 
				placeTitle="Parque Miguel Lillo" 
				placeSlug='/'
			/>
			<FeaturedPlaceSmall 
				imgUrl="https://www.diario4v.com/u/fotografias/fotosnoticias/2017/4/19/17979.jpg" 
				placeTitle="Parque Miguel Lillo" 
				placeSlug='/'
			/>
			</div>

		</section>
	)
}
