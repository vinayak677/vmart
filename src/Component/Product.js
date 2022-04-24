import React, { useEffect, useState } from 'react'
import './Product.css'

const Product = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');

    let componentMounted = true;

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(_data => setData(_data))
    }, [])

    const filtered=(data)=>data.filter((val)=>{
        return val.category.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <div className='container'>
            <div >
                <h3 className='d-flex flex-column align-items-center mt-4 mb-4'>Latest Products</h3><hr />
            </div>
            <div className='row mb-3 ms-2 mx-auto '>
                <div className='buttons col-12 d-flex justify-content-center align-atem-center'>
                    <button className='btn btn-outline-dark ms-2' onClick={()=>setFilter('')}>All</button>
                    <button className='btn btn-outline-dark ms-2'onClick={()=>setFilter(`men's clothing`)}>Men's clothing</button>
                    <button className='btn btn-outline-dark ms-2'onClick={()=>setFilter(`women's clothing`)}>Women's clothing</button>
                    <button className='btn btn-outline-dark ms-2'onClick={()=>setFilter(`jewelery`)}>Jewelery</button>
                    <button className='btn btn-outline-dark ms-2'onClick={()=>setFilter(`electronics`)}>Electronics</button>
                </div>

            </div>
            <div className='container'>
                <div className='row'>
                        {filtered(data)?.map((values) => {
                            return (
                                <div className='col-4'>
                                    <div class="card ">
                                        <img src={values.image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h3 class="card-title">{values.category}</h3>
                                            <h5 class="card-title">{values.title}</h5>
                                            {/* <p class="card-text">{values.description}</p> */}
                                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                    </div>
                                </div>
                            )   
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Product