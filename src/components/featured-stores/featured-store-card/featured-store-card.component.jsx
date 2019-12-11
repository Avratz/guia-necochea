import React from 'react' 

import './featured-store-card.styles.scss'

export default function FeaturedStoreCard ({storeCategory, storeScore, storeTitle, storeAddress, storeImgUrl}) {
    return (
        <div className='featured-store-card'>
            <div className='featured-store-card-img' style={{backgroundImage: `url(${storeImgUrl})`}}></div>
            <div className='featured-store-card-info'>
                <div className="featured-store-card-category-stars">
                    <span className="featured-store-card-category">{storeCategory}</span>
                    <i>{storeScore}</i>
                </div>
                <h3 className='featured-store-card-title'>{storeTitle}</h3>
                <div className="featured-store-card-address">
                    <i>#</i> <p>{storeAddress}</p>
                </div> 
            </div>
        </div>
    )
}