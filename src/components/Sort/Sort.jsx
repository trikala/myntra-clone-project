import React from 'react'
import './Sort.css';


export function Sort({handleSort}) {
    let submit=(e)=>(e.preventDefault()) 
    return (
        <div className='sort-container'>
            <div className='filter'>Filters</div>
            <div className='sort-options'>
                <form onSubmit={submit}>
                <select name="sort" id="sorting" onChange={handleSort}>
                    <option value={""} >Sort by : Recommendation</option>
                    {/* <option value="whats-new" onClick={handleSort}>What's New</option> */}
                    {/* <option value="discount" onClick={handleSort}>Better Discount</option> */}
                    <option value={'low'} >Price Low to High</option>
                    <option value={"high"} >Price High to Low</option>
                </select>
                </form>
            </div>

        </div>
    )
}
