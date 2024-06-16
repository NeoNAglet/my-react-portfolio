import React from 'react';
import './popup.scss';
import { RiCloseFill } from '@remixicon/react';

const Popup = ({showPopup,handlePopup,children}) => {
  return (
    <div className={showPopup ? 'popup show' : 'popup hide'}>
        <button className='btn' onClick={()=>handlePopup()}><RiCloseFill/></button>
        {children}
    </div>
  )
}

export default Popup