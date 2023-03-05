import React from 'react'
import "./header.css"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header() {
    return (
        <div className='container-fluid'>
            <div className='row r1'>
                <div className='col-4 ma offset-2'>
                <LocalShippingIcon style={{marginRight:"5px"}}/>Enter Pincode &nbsp; &nbsp; &nbsp; <span style={{color : "#22333B"}}>Change Pincode</span>
                </div>

                <div className='col-2 ma'></div>

                <div className='col-2 ma'>
                <LocationOnIcon style={{marginRight:"5px",marginLeft:"80px"}}/>Order Tracking
                </div>
            </div>
            <div className='row r2' style={{color:"#8A8A8A"}}>
                <div className='col-2 mt-3'><span style={{fontSize:"32px",color:"black",marginLeft:"80px"}}>frikly</span></div>
                <div className='col-1 ma'>Home</div>
                <div className='col-1 ma'>About</div>
                <div className='col-5 ma'>
                    <input class="form-control me-2" type="search" placeholder="🔍 Search for products" aria-label="Search" />
                </div>
            
                <div className='col-2 mt-4'  >
                    <PersonOutlineOutlinedIcon fontSize='large' style={{marginRight:"20px"}}/>
                    <FavoriteBorderIcon fontSize='large' style={{marginRight:"20px"}}/>
                    <ShoppingCartOutlinedIcon fontSize='large'/>
                </div>
            </div>
            <div className='row r3 '>
                <div className='col-1'></div>
                <div className='col-1 ma'>New Arrivals</div>
                <div className='col-1 ma'>Chairs</div>
                <div className='col-1 ma'>Sofas</div>
                <div className='col-1 ma'>Tables</div>
                <div className='col-1 ma'>Beds</div>
                <div className='col-1 ma'>Storage</div>
                <div className='col-1 ma'>Decor</div>
                <div className='col-1 ma'>Kitchen</div>
                <div className='col-1 ma'>Garden</div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default Header