import React from 'react'
import './ModalScreen.css';
import { Data } from '../Data';

export function ModalScreen({ id }) {
  // console.log(id);
  const Modal = Data.filter((data) => {
    return id.includes(data.id)
  })
  // console.log(Modal);
  return (
    <div className='modal-wrapper'>
      {Modal.map((val)=>(
    
      <>
      <div className='modal-img'>
        
        <img height='100px' src={val.imgscr} alt="" />
        <img height='100px' src={val.img2} alt="" />
        <img height='100px' src={val.img3} alt="" />
        <img height='100px' src={val.img4} alt="" />
      </div>
      <div className='modal-det'>
        <span className='bname'>{val.pname}</span>
        <br />
        <span className='product'>{val.product}</span>
        <br />
        <span >{val.description}</span>
        <br />
        <span>{val.price}</span>
        <br />
        <span >{val.size}</span>

      </div>
      </>
        )
      )
  }
    </div>
  )
}

