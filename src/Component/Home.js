import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-white " style={{marginBottom:'150px'}}>
                <img src="./images/img5.jpg" className="card-img " style={{marginRight:'0px'}} alt="background" height='550px'/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                    <h5 className="card-title display-3 fw-bolder mb-0" style={{color:'black'}}>NEW SEASON ARRIVALS</h5>
                    <p className='card-text lead fs-2' style={{fontSize:'60px',fontWeight:'1000px'}}>
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