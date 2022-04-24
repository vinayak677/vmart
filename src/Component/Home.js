import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white " style={{marginBottom:'150px'}}>
                <img src="./images/img5.jpg" className="card-img " alt="background" height='550px'/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className='card-text lead fs-2'>
                        CHECK OUT THE TRENDS
                    </p>
                    </div>
                </div>
            </div>
            <Product />
        </div>
    )
}

export default Home