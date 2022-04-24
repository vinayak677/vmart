import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 shadow-sm">
                <div className="container">
                    <Link to='/' className="navbar-brand fw-bold fs-4 " >V collection</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li href='/' className="nav-item"><Link to="/" className="nav-link active">Home</Link></li>
                            <li  href='/product' className="nav-item"><Link to="/product" className="nav-link">Product</Link></li>
                            <li  href='/contact' className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                            <li  href='/about' className="nav-item"><Link to="/about" className="nav-link">About</Link></li>

                        </ul>
                        <div >
                            <a href='/' className='btn btn-outline-dark'>
                                <i className='fa fa-sign-in me-1' ></i>Login</a>
                            <a href='/' className='btn btn-outline-dark ms-2' >
                                <i className='fa fa-user-plus me-1' ></i>Register</a>
                            <a href='/' className='btn btn-outline-dark ms-2'>
                                <i className='fa fa-shopping-cart me-1' ></i>Cart (0)</a>
                        </div>


                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar