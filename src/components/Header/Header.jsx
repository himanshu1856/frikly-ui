import React from 'react'
import "./header.css"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return (
        <div className='container-fluid'>
            <div className='row r1'>
                <div className='col ma'>
                    <LocalShippingIcon />
                </div>
                <div className='col ma'>
                    Enter Pincode
                </div>
                <div className='col ma'>Change Pincode</div>
                <div className='col ma'>
                    <LocationOnIcon />
                </div>
                <div className='col ma'>
                    Order Tracking
                </div>
            </div>
            <div className='row r2'>
                <div className='col ma'>frikly</div>
                <div className='col ma'>Home</div>
                <div className='col ma'>About</div>
                <div className='col ma'>
                    <input class="form-control me-2" type="search" placeholder="Search for products" aria-label="Search" />
                </div>
                <div className='col ma'>
                    <PersonIcon />
                </div>
                <div className='col ma'>
                    <FavoriteBorderIcon />
                </div>
                <div className='col ma'>
                    <ShoppingCartIcon/>
                </div>
            </div>
            <div className='row r3'>
                <div className='col ma'>New Arrivals</div>
                <div className='col ma'>Chairs</div>
                <div className='col ma'>Sofas</div>
                <div className='col ma'>Tables</div>
                <div className='col ma'>Beds</div>
                <div className='col ma'>Storage</div>
                <div className='col ma'>Decor</div>
                <div className='col ma'>Kitchen</div>
                <div className='col ma'>Garden</div>
            </div>
        </div>
    )
}

export default Header