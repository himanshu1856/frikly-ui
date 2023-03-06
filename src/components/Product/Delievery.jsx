import React from 'react'
import Replacement from "../../assets/replacement.png"
import Rupee from "../../assets/rupee.png"
import Truck from "../../assets/truck.png"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Delievery() {
  return (
    <>

      <div className='row' style={{ marginTop: "70px" }}>
        <div className='col'>
          <div className='row ' style={{ marginLeft: "20px", marginBottom: "10px" }}><img style={{ height: "40px", width: "60px" }} src={Rupee} /></div>
          <div className='row' style={{ fontSize: "14px" }}>Pay On Delievery <br /> &nbsp; &nbsp; &nbsp; &nbsp;Available</div>
        </div>
        <div className='col'>
          <div className='row' style={{ marginLeft: "20px", marginBottom: "10px" }}><img style={{ height: "40px", width: "60px" }} src={Truck} /></div>
          <div className='row' style={{ fontSize: "14px" }}>Safe Delivery by <br />  &nbsp; &nbsp; &nbsp; &nbsp; Frikly</div>
        </div>
        <div className='col'>
          <div className='row' style={{ marginLeft: "20px", marginBottom: "10px" }}><img style={{ height: "40px", width: "60px" }} src={Replacement} /></div>
          <div className='row' style={{ fontSize: "14px" }}> &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;10 days <br />  &nbsp; &nbsp; &nbsp;Replacement</div>
        </div>

      
          <div className='row mt-4' style={{ height: "35px" }}>
            <div className='col-8 p-1' style={{ backgroundColor: "#F0F0F0" }}><LocationOnOutlinedIcon className='me-4'/>Enter pincode</div>
            <div className='col-3 pt-1' style={{ backgroundColor: "#22333B", color: "white", textAlign:"center" }} >Check</div>
          </div>
        

        <div className='container mt-4 p-2' style={{ color: "#8A8A8A", backgroundColor: "#EEE6DD" }}>
          <span>Get it delivered between </span><span style={{ color: "black", fontWeight: "bold" }}>Sat, Jun 18 - Mon, Jun 20</span>
        </div>
        <p className='mt-3'><strong>Free shipping on all orders</strong></p>
      </div>
    </>
  )
}

export default Delievery