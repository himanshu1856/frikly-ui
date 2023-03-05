import React from 'react'
import "./product.css"
import Left from './Left'
import Right from './Right'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Product() {
    return (
        <div className='container-fluid mt-4'>
            <div className='row ms-4 local-nav'>Home &gt; Living Room &gt; Sofas &gt; Premium Leatherette Sofa 3 Seater</div>
            <div className='row mt-4 ms-4'>
                <div className='col-5'>
                    <Left/>
                </div>
                <div className='col-5 right'>
                    <Right/>
                </div>
                <div className='col-2 heart'>
                    <FavoriteIcon fontSize='large'/>
                </div>
            </div>
        </div>
    )
}

export default Product