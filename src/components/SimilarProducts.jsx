import React from 'react'
import ProductCard from "./ProductCard"

function SimilarProducts() {
  return (
    <div className='container-fluid'>
    <h2 className='m-4'>Similar Products</h2>
      <div className='row'>
        <div className='col-2'><ProductCard/></div>
        <div className='col-2 offset-1'><ProductCard/></div>
        <div className='col-2 offset-1'><ProductCard/></div>
        <div className='col-2 offset-1'><ProductCard/></div>
      </div>
    </div>
  )
}

export default SimilarProducts