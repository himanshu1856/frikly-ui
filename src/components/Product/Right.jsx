import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ProfileCard from './ProfileCard';
import Delievery from "./Delievery";
import Overview from './Overview';

function Right() {
  return (
    <>
        <h1>
        <b>Dorna Premium Leatherette Rolled arm Sofa, 74.01” 3 Seater, Light Brown</b>
        </h1>
        <div className='container-fluid price-container'>
            <span className='price'>MRP : <strike>₹17,999</strike> <span className='text-white bg-dark ps-1 pe-1'> 11% off </span></span> <br/>
            <span className='actual-price'>₹15,999</span><span style={{fontSize:"28px",color:"#C6AC8F"}}>.00 </span> <span style={{fontSize:"28px"}}>/ piece</span><br/>
            <span style={{fontSize:"36px",fontWeight:"bold"}}>ON SALE</span>
            <br/><br/>
            <span style={{fontSize:"14px",fontWeight:"bold"}}>Brand Name : </span><span style={{fontSize:"14px"}}>None</span><br/>
            <span style={{fontSize:"14px",fontWeight:"bold"}}>Size : </span><span style={{fontSize:"14px"}}>8 feet x 1.6 feet</span><br/>
            <span style={{fontSize:"14px",fontWeight:"bold"}}>Set Available : 150</span><br/>
            <span className='text-white bg-dark mt-4 pt-2' style={{display:"block",width:"429px",height:"49px",fontSize:"18px",textAlign:"center"}}>Get Quote</span>
            <br/>
            <LocalShippingOutlinedIcon/> <span className='ms-2' style={{color:"#10A728",fontSize:"18px",textDecoration:"underline"}}>Eligible for free 1 day delivery</span>
            <br/>
            <ProfileCard/>
            <Delievery/>
            <Overview/>
        </div>   
    </>
  )
}

export default Right