import React from 'react'
import ProductCard from "./ProductCard"

function RecentlyViewed() {
  return (
    <div className='container-fluid'>
    <h2 className='m-4'>Recently Viewed</h2>
      <div className='row'>
        <div className='col-2'><ProductCard/></div>
        <div className='col-2 offset-1'><ProductCard/></div>
        <div className='col-2 offset-1'><ProductCard/></div>
        <div className='col-2 offset-1'><ProductCard/></div>
      </div>
    </div>
  )
}

export default RecentlyViewed