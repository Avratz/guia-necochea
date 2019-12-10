import React from 'react'

import { Link } from "react-router-dom";

import './featured-place-wide.styles.scss'

function FeaturedPlaceWide ({imgUrl, placeTitle, placeDescription, placeSlug}) {
    return (
        <div className='featured-place-wide' >
            <div 
            className="featured-place-wide-img" 
            style={{ backgroundImage: `url(${imgUrl})` }}
            >
                <div className="cover-img-fx" />
            </div>

            <div className="featured-place-wide-info">
                <h3>{placeTitle}</h3>
                <p>{placeDescription}</p>
                <Link to={placeSlug}>Ver Mas</Link>
            </div>
        </div>
    )
}

export default FeaturedPlaceWide