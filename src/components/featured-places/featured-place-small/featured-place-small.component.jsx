import React from 'react'

import { Link } from 'react-router-dom'

import './featured-place-small.styles.scss'

export default function FeaturedPlaceSmall({imgUrl, placeTitle, placeSlug}) {
    return (
        <div className='featured-place-small'
            style={{backgroundImage: `url(${imgUrl})`}}
        >
        <div className="cover-img-fx" />
            <Link to={placeSlug}>{placeTitle}</Link>
        </div>
    )
}