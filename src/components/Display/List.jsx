import React,{useContext} from 'react'
import './List.css';
import { WishListContext } from '../../App';

export function List({ photo, pname, product, price, id ,handleOpen}) {
 const {data,setData}=useContext(WishListContext);
//  console.log(data,'this is data list');
  return (
    <div className='List-container' >
      <div className='List-wrapper' id={id} >
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
          <button className='wish' onClick={()=>setData([...data,id])}>Add To WishList</button>
        </div>
      </div>
    </div>
  )
}