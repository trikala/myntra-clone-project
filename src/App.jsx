import React, { useState, createContext } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { SideBar } from './components/SideBar/SideBar';
import { Sort } from './components/Sort/Sort';
import { Product } from './components/Display/Product';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login/Login';
import { SignUp } from './components/SignUp/SignUp'
export const WishListContext = createContext();
export const CartContext = createContext();



export function App() {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState('');
  const [cat, setCat] = useState([]);
  const [brand, setBrand] = useState([]);


  const handleGender = (e) => {
    setGender(e.target.value);
  }
  const handleCat = ((billi) => (
    setCat(billi)
  ))  
  const handleSort = ((e) => setSort(e.target.value));

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  // console.log(sort);
  return (
    <div className='main'>
      <WishListContext.Provider value={{ data, setData }}>

        <CartContext.Provider value={{ cart, setCart }}>

          <Navbar handleSearch={handleSearch} />

          <Sort handleSort={handleSort} />

          <div className='display'>

            <div className='display-left'>

              <SideBar handleGender={handleGender} handleCat={handleCat} />

            </div>

            <div className='display-right'>

              <Product gender={gender} cat={cat} sort={sort} search={search} />

            </div>

          </div>
        </CartContext.Provider>
      </WishListContext.Provider>
      <Footer />
      
    </div>
  )
}

