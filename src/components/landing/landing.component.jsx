import React from 'react'

import Header from '../header/header.component'
import SearchBox from './search/search.component'
import FotoDetails from './foto-details/foto-details.component'
import './landing.styles.scss'

export default function Landing() {
	return (
		<section className="landing container-fluid">
			<Header />
			<SearchBox />
			<FotoDetails />
		</section>
	)
}
