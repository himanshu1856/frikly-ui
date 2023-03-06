import React from 'react'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

function Overview() {
  return (
    <div>
      <h5 className='mt-4 mb-4'><b>Product Overview</b></h5>

      <div className='row p-4' style={{ backgroundColor: '#EAE1D6', height: "121px" }}>
        <div className='col-6'>
          Extreme Comfort
        </div>
        <div className='col-6'>
          Water Resistant
        </div>
        <div className='w-100'></div>
        <div className='col-6'>
          1 year Warranty
        </div>
        <div className='col-6'>
          <div>Removable Cushions</div>
        </div>
      </div>

      <div className='row mt-4 p-2' style={{ backgroundColor: "#22333B", height: "49px", color: "white" }}>
        <div className='col-10'>Description</div>
        <div className='col-2'><ExpandMoreOutlinedIcon /></div>
      </div>

      <div className='row mt-4 p-2'>
        This premium leather sofa is classy and minimal and enhances the aesthetic appearance of modern living rooms. It is a three-seater spacious sofa that provides a great blend of comfort and luxury. The sofa has a contemporary feel to it, and is an ideal match for most interior decor themes. This sofa is fully upholsteres with superior quality leatherette that feels soft to the touch.
      </div>

      <hr/>

      <div className='row'>
      <div className='col-10'><StraightenOutlinedIcon style={{marginRight:"10px"}}/>Dimensions</div>
        <div className='col-2'><ExpandMoreOutlinedIcon /></div>
      </div>
      
      <hr/>

      <div className='row'>
      <div className='col-10'><LocalShippingOutlinedIcon style={{marginRight:"10px"}}/>Shipping Detais</div>
        <div className='col-2'><ExpandMoreOutlinedIcon /></div>
      </div>

    </div>

  )
}

export default Overview