import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';

function ProfileCard() {
    return (
        <div className='mt-4'>
            ProfileCard
            <br />
            <input className='mt-4' type="checkbox" name="propducts" /> <label>Compare products</label>
            <div className='row mt-3'>
                <div className='col-2'>Share : </div>
                <div className='col-3' style={{color:"#79BA7E" , textDecoration:"underline"}}><WhatsAppIcon /> Whatsappp</div>
                <div className='col-3' style={{color:"#FF7945", textDecoration:"underline"}}><InstagramIcon /> Instagram</div>
                <div className='col-3' style={{textDecoration:"underline"}}><ShareIcon />Share</div>
            </div>
        </div>
    )
}

export default ProfileCard