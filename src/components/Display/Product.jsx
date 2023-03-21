import React, { useState, } from 'react'
import { List } from './List'
import { Modal } from 'antd'
import { ModalScreen } from './ModalScreen';
import { Data } from '../Data';


export function Product({ gender, sort, cat, search, handleCartId }) {

    const [open, setOpen] = useState(false);

    // let sortedData;
    // let initSort

    let sorted;
    if (sort === '') { sorted = Data }
    else if (sort === 'low') {
        sorted = Data.sort((a, b) => { return parseInt(a.price) - parseInt(b.price) })
    }
    else {
        sorted = Data.sort((a, b) => { return parseInt(b.price) - parseInt(a.price) })
    }

    let filterData = sorted.filter((data) => {
        if (gender !== '' && search === '') {
            return data.filter === gender
        }
        else if (gender === '' && search !== '') {
            return data.product.includes(search.toLowerCase())
        }
        else if (gender !== '' && search !== '') {
            return (data.filter === gender && data.product.includes(search.toLowerCase()))
        }
        else {
            return sorted;
        }
        // return (
        // gender === ''  ? sorted : data.filter === gender)

    }

    )
    const [id, setId] = useState(0);
    const handleOpen = (e) => {
        setOpen(true)
        setId(e.target.id)
    }
    // console.log(setId)
    // console.log(id);
    // console.log(one);
    return (
        <div className='product' style={{ display: 'grid', gridTemplateColumns: '.75fr .75fr .75fr' }}>

            {

                filterData === [] ? Data : filterData.map((cal) => {
                    return (
                        <>
                            <div>

                                <List
                                    photo={cal.imgscr}
                                    pname={cal.pname}
                                    product={cal.product}
                                    price={cal.price}
                                    handleOpen={handleOpen}
                                    id={cal.id} 
                                    handleCartId={handleCartId}
                                />


                            </div>
                            <Modal open={open} onCancel={() => setOpen(false)} footer={false} >
                                <ModalScreen
                                    id={id}

                                />
                            </Modal >


                        </>

                    )
                })

            }





        </div>
    )
}

