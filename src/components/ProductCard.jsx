import React from 'react'
import Card from "../assets/card.png"

function ProductCard() {
  return (
    <div class="card m-4 shadow p-3 mb-5 bg-white rounded" style={{width: "18rem"}}>
      <img src={Card} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title"><b>Ainsley Rolled Arm Sofa 74.01” by Steelside</b></h5>
          <span style={{color:"#868686",fontSize:"14.6px"}}>MRP : <strike>₹17,999</strike> <span className='text-white bg-dark ps-1 pe-1'> 11% off </span></span> <br/>
            <span style={{color:"#C6AC8F",fontSize:"30px"}}>₹15,999</span><span style={{fontSize:"14.4px"}}>/ piece</span><br/>
          <a href="#" class="btn" style={{backgroundColor:"#D9D9D9"}}>Add to cart</a>
        </div>
    </div>
  )
}

export default ProductCard