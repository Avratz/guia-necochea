import React from 'react'

// Sections in Home Page
import Landing from '../../components/landing/landing.component'
import FeaturedCategories from '../../components/featured-categories/featured-categories.component'
import Places from '../../components/featured-places/featured-places.component'
import Stores from '../../components/featured-stores/featured-stortes.component'
import Footer from '../../components/footer/footer.component'

export default function HomePage() {
	return (
		<>
			<Landing />
			<FeaturedCategories />
			<Places />
			<Stores />
			<Footer />
		</>
	)
}
