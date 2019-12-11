import React from 'react'

// Sections in Home Page
import Landing from '../../components/landing/landing.component'
import FeaturedCategoriesSection from '../../components/featured-categories/featured-categories-section.component'
import FeaturedPlacesSection from '../../components/featured-places/featured-places-section.component'
import FeaturedStoresSection from '../../components/featured-stores/featured-stores-section.component'
import Footer from '../../components/footer/footer.component'

export default function HomePage() {
	return (
		<>
			<Landing />
			<FeaturedCategoriesSection />
			<FeaturedPlacesSection />
			<FeaturedStoresSection />
			<Footer />
		</>
	)
}
