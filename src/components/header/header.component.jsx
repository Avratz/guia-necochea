import React from 'react'

import Navbar from './navbar/navbar.component'
import Logo from './logo.png'

import './header.styles.scss'

export default function Header() {
	return (
		<div className="header">
			<img src={Logo} alt="Guía Necochea" className="header__logo" />
			<Navbar />
		</div>
	)
}
