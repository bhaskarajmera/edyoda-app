import React from 'react'
import EDYODA from '../../assets/images/EDYODA-logo.svg'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar-nav bg-white p-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pt-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="">
                                    <img width={110} src={EDYODA} />
                                </div>
                                <div className="f-14">
                                    <a className="text-decoration-none text-black">Courses<span><i className="fa fa-angle-down px-2"></i></span></a>
                                </div>
                                <div className="f-14">
                                    <a className="text-decoration-none text-black">Program<span><i className="fa fa-angle-down px-2"></i></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="offset-md-5 col-md-3 py-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="f-14">
                                    <i className="fa fa-search"></i>
                                </div>
                                <div>
                                    <a className="f-14 text-decoration-none text-black">
                                        Log in
                                    </a>
                                </div>
                                <div className="f-14">
                                    <button className="join-btn btn text-white">JOIN NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar