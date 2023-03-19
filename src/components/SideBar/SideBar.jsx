import React, { useState } from 'react'
import './Sidebar.css';
import { Checkbox } from 'antd'

export function SideBar({ handleGender , handleCat}) {



    return (
        <div className='sidebar-wrapper'>
            <div className='gender-wrapper'>
                <div className='text'> GENDER </div>
                <div className='gender-radio'>
                    <input type="radio" name='gender' value={'men'} id='men' onChange={handleGender} />
                    <label htmlFor='men'>Men</label>
                    <br />
                    <input type="radio" name="gender" id="women" value={'women'} onClick={handleGender} />
                    <label htmlFor="women">Women</label>
                    <br />
                    <input type='radio' name="gender" id="boys" value={'boys'} onClick={handleGender} />
                    <label htmlFor="boys">Boys</label>
                    <br />
                    <input type="radio" name="gender" id="girls" value={'girls'} onClick={handleGender} />
                    <label htmlFor="girls">Girls</label>
                </div>

            </div>
            <div className='cat-wrapper'>
                <div className='text'> CATEGORIES  </div>
                <div className='cat-check'>
                    <input type="checkbox" id='shirt' name='shirt' value={'shirt'} onClick={handleCat} />
                    <label htmlFor="shirt"> Shirt </label>
                    <br />
                    <input type="checkbox" id='t-shirt' name='t-shirt' value={'t-shirt'} onClick={handleCat} />
                    <label htmlFor="t-shirt"> T-Shirt </label>
                    <br /> 
                    {/* /* <input type="checkbox" id='shirt' name='shirt' value={'Shirt'}/>
                    <label htmlFor="shirt"> Shirt </label>
                    <br />
                    // <Checkbox.Group options={options}  onChange={handleCat} /> */}
                    

                </div>

            </div>
            <div className='brand-wrapper'>
                <div className='text'> BRAND </div>
                <div className='brand-check'>
                    <input type="checkbox" id='zara' name='zara' />
                    <label htmlFor="zara"> Zara </label>
                    <br />
                    <input type="checkbox" id='parx' name='parx' />
                    <label htmlFor="zara"> Parx </label>
                    <br />
                    <input type="checkbox" id='roadster' name='roadster' />
                    <label htmlFor="roadster"> Roadster </label>
                    <br />
                    <input type="checkbox" id='harvard' name='harvard' />
                    <label htmlFor="harvard"> Harvard </label>
                    <br />
                    <input type="checkbox" id='wrong' name='wrong' />
                    <label htmlFor="wrong"> Wrong </label>
                    <br />
                </div>
            </div>

        </div>
    )
}

