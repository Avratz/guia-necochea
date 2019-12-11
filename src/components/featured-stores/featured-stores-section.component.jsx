import React from 'react'

import FeaturedStoreCard from "./featured-store-card/featured-store-card.component";

import './featured-stores-section.styles.scss'

export default function FeaturedStoresSection() {
	return (
		<section className='featured-stores container'>
			<h2 className="h2-home">Comercios Destacados</h2>
			<div className="featured-stores-list">
				<FeaturedStoreCard 
					storeImgUrl='https://media-cdn.tripadvisor.com/media/photo-s/0c/c4/af/b8/la-juanita-empanadas.jpg'
					storeTitle='La juanita'
					storeCategory='Pizzeria'
					storeAddress='Calle 59 esquina 50'	
					storeScore='5'
				/>
			</div>
			
		</section>
	)
}
