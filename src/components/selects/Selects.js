import React from 'react'
import './SelectsStyles.css'

import StonyIsland from '../../assets/StonyIsland.jpg'
import borabora from '../../assets/borabora.jpg'
import chicago from '../../assets/chicago.jpg'
import maldives from '../../assets/maldives.jpg'
import keywest from '../../assets/keywest.jpg'
import SanDiego from '../../assets/keywest.jpg'


import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
  return (
    <div name='views' className='selects'>
      <div className="container">
        <SelectsImg bgImg={borabora} text='Bora Bora' />
        <SelectsImg bgImg={StonyIsland} text='Stony Islands' />
        <SelectsImg bgImg={maldives} text='Maldives' />
        <SelectsImg bgImg={keywest} text='Key West' />
        <SelectsImg bgImg={chicago} text='Chicago' />
        <SelectsImg bgImg={SanDiego} text='San Diego' />
    </div>
    </div>
  )
}

export default Selects