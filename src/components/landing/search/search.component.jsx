import React from 'react'

import { Button, Input } from 'antd'
const { Search } = Input
export default function SearchBox() {
	return (
		<div className="searchBox">
			<Search
				placeholder="¡Encontrá lo que estás buscando!"
				style={{ width: 500 }}
			/>
			<br />
			<Button type="primary">BUSCAR</Button>
		</div>
	)
}
