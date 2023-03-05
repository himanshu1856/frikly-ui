import React from 'react'
import Sofa from "../../assets/Sofa.png";
import Sofa1 from "../../assets/Sofa1.png";
import Sofa2 from "../../assets/Sofa2.png";
import Sofa3 from "../../assets/Sofa3.png";
import Sofa4 from "../../assets/Sofa4.png";
import Sofa5 from "../../assets/Sofa5.png";


function Left() {
    return (
        <>
            <div className='row'>
                <img className='main-image' src={Sofa}></img>
            </div>
            <div className='row mt-3'>
                <div className='col-1 offset-1 opt-image '><img src={Sofa1}></img></div>
                <div className='col-1 opt-image ms-4'><img src={Sofa2}></img></div>
                <div className='col-1 opt-image ms-4'><img src={Sofa3}></img></div>
                <div className='col-1 opt-image ms-4'><img src={Sofa4}></img></div>
                <div className='col-1 opt-image ms-4'><img src={Sofa5}></img></div>
            </div>

        </>
    )
}

export default Left