import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import {PRODUCT_ROUTE} from './Constants/index';

const Product = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');

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
                <h3 className='d-flex flex-column align-items-center mt-4 mb-4' >Latest Products</h3><hr />
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
                                            
                                   <Link to={`/${PRODUCT_ROUTE}/${values.id}`} state={values} >
                                    <div className="card "  >
                                        <img src={values.image}  className="card-img-top" alt="..." />
                                        <div className="card-body" >
                                            <h3 className="card-title">{values.category}</h3>
                                            <h5  className="card-title">{values.title}</h5>
                                      
                                        </div>
                                    </div>
                                    </Link>
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