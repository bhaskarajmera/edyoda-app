import React from 'react'
import Navbar from '../navbar/navbar'
import Content from './content'
import PayComponent from './payComponent'

const MainIndex = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row mainContainer">
                    <div className="col-md-6">
                        <Content />
                    </div>
                    <div className="col-md-6">
                        <PayComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainIndex