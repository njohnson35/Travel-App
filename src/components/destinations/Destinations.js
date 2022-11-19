import React from 'react'
import './DestinationsStyles.css'

import StonyIsland from '../../assets/StonyIsland.jpg'
import borabora from '../../assets/borabora.jpg'
import chicago from '../../assets/chicago.jpg'
import maldives from '../../assets/maldives.jpg'
import keywest from '../../assets/keywest.jpg'


function Destinations() {
  return (
    <div>
        <div name='destinations' className="destinations">
            <div className="container">
                <h1>All-Inclusive Resorts</h1>
                <p>On the Caribbeans's Best Beaches</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={StonyIsland} alt="stonyisland"/>
                    <img src={borabora} alt="borabora"/>
                    <img src={maldives} alt="maldives"/>
                    <img src={chicago} alt="chicago"/>
                    <img src={keywest} alt="keywest"/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Destinations