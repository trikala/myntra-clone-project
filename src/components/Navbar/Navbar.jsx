import React,{useContext, useState} from 'react'
import './Navbar.css';
import { Badge, Space } from 'antd'
import { WishListContext } from '../../App';
import { CartContext } from '../../App';
import {Modal} from'antd'
import {Cart} from '../Cart/Cart';


import myntralogo from '../myntra.png';
import { HeartFilled, UserOutlined, ShoppingFilled } from '@ant-design/icons'




export function Navbar({ handleSearch }) {
    const menu = ['MENS', 'WOMENS', 'BOYS', 'GIRLS', 'OFFERS'];

    const {data} = useContext(WishListContext);
    const {cart} = useContext(CartContext);
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true)
    }
    // console.log(...cart,cart);

    
    return (
        <div className='navbar-container'>
            <div className='navbar-wrapper'>
                <div className='navbar-logo'>
                    <img className='navbar-logo-inside' src={myntralogo} alt="" />
                </div>
                <div className='navbar-cat'>
                    {menu.map((cat, index) => (
                        <div className={`inner-cat ${index}`} key={cat}>
                            <p>{cat}</p>
                        </div>
                    ))
                    }
                </div>
                <div className='navbar-search'>
                    <input type="text" onChange={handleSearch} />
                </div>

                <div className='navbar-icons'>
                    <div className='profile icon-inside `'>
                        <UserOutlined id='user' />
                        <label htmlFor="user">Profile</label>
                    </div>
                    <div className='wishlist icon-inside'>
                        <Space size='large'>

                            <Badge count={data.length} showZero>
                                <HeartFilled id='wish' />
                            </Badge>
                        </Space>
                            <label htmlFor="wish">Wishlist</label>
                    </div>
                    <div className='cart icon-inside' onClick={handleOpen}>  
                            <Badge count={cart.length} showZero>
                                <ShoppingFilled id='cart' />
                            </Badge>
                        <label htmlFor="cart">Cart</label>
                    </div>
                    <Modal 
                        open={open} 
                        onCancel={()=>setOpen(false)} 
                        footer={false}
                    >
                        <Cart id={cart}/>
                    </Modal>
                </div>

            </div>

        </div>
    )
}

