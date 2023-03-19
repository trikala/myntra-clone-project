import React from 'react'
import './List.css';

export function List({ photo, pname, product, price, id ,handleOpen}) {
 
  return (
    <div className='List-container' >
      <div className='List-wrapper'  >
        <div className='List-image' onClick={handleOpen} >
          <img src={photo} alt="loading" id={id} className='photo' />
        </div>
        <div className="List-detail ">
          <span className='heading'>{pname}</span>
          <br />
          <span>{product}</span>
          <br />
          <span>Rs {price}</span>
          <br />
          <br />
          <button className='wish'>Add TO Wishlist</button>
          <br />
          <button className='wish'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

