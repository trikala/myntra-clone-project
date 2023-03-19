import React, { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { SideBar } from './components/SideBar/SideBar';
import { Sort } from './components/Sort/Sort';
import { Product } from './components/Display/Product';
import { Footer } from './components/Footer/Footer';
import {Cart} from './components/Cart/Cart'


export function App() {
  const [cart,setCart]=useState([]);
  const [sort ,setSort]=useState('');
  const [search,setSearch]=useState('');
  const [gender, setGender] = useState('');
  const [cat, setCat] = useState([]);
  const [brand, setBrand] = useState([]);
  const handleGender = (e) => {
    setGender(e.target.value);
  }
  const handleCat=((billi)=>(
    setCat(billi)
  ))
  console.log(cat);
  const handleSort=((e)=>setSort(e.target.value));
  
  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }
  console.log(search);

  // console.log(sort);
  return (
    <div className='main'>
      <Navbar handleSearch={handleSearch}/>

      <Sort handleSort={handleSort} />
      <div className='display'>
        <div className='display-left'>
          <SideBar handleGender={handleGender} handleCat={handleCat} />
        </div>
        <div className='display-right'>
          <Product gender={gender} cat={cat} sort={sort} search={search}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

