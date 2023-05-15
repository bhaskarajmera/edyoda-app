import React, { useState } from 'react'
import RazorPay from '../../assets/images/razorpay-logo.svg'
import LimitedTimeIcon from '../../assets/images/limited-time-icon.svg'

const PayComponent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="offset-md-1 col-md-10">
                    <div className='pay-container rounded bg-white py-3 px-2'>
                    <div className='row'>
                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center text-center'><div className='progress-circle'>1</div><p className='f-12'>Sign Up</p></div>
                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center text-center'><div className='progress-circle'>2</div><p className='f-12'>Subscribe</p></div>
                    </div>
                    <div className='row'>
                        <div className="col-md-12 text-center fw-bold">Select your subscription plan</div>
                    </div>
                    <div>
                        <div className='subscription-tile-disabled d-flex justify-content-between align-items-center border border-secondary rounded p-2 my-2'>
                            <div>
                                <input type="radio" className="radioSub" name="" checked disabled/>
                                <span className="text-muted px-2">12 Months Subscription</span>
                            </div>
                            <div className="f-10">
                                <div>Total<span className="text-muted px-1"><i className="fa fa-inr"></i>99</span></div>
                                <div className="text-muted"><i className="fa fa-inr">8</i><span className="text-muted px-1">/mo</span></div>
                            </div>
                        </div>
                        <div className='subscription-tile d-flex justify-content-between align-items-center border border-success rounded p-2 my-2'>
                            <div>
                                <input type="radio" className="radioSub" name="subscriptionTile"/>
                                <span className="px-2">12 Months Subscription</span>
                            </div>
                            <div className="f-10">
                                <div>Total<span className="text-muted px-1"><i className="fa fa-inr"></i>179</span></div>
                                <div className="text-muted"><i className="fa fa-inr">15</i><span className="text-muted px-1">/mo</span></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border border-secondary rounded p-2 my-2'>
                            <div>
                                <input type="radio" className="radioSub" name="subscriptionTile"/>
                                <span className="px-2">6 Months Subscription</span>
                            </div>
                            <div className="f-10">
                                <div>Total<span className="text-muted px-1"><i className="fa fa-inr"></i>149</span></div>
                                <div className="text-muted"><i className="fa fa-inr">25</i><span className="text-muted px-1">/mo</span></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border border-secondary rounded p-2 my-2'>
                            <div>
                                <input type="radio" className="radioSub" name="subscriptionTile"/>
                                <span className="px-2">3 Months Subscription</span>
                            </div>
                            <div className="f-10">
                                <div>Total<span className="text-muted px-1"><i className="fa fa-inr"></i>99</span></div>
                                <div className="text-muted"><i className="fa fa-inr">33</i><span className="text-muted px-1">/mo</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='border-top border-secondary p-2'>
                        <div className='d-flex justify-content-between'>
                            <div>Subscription Fee</div>
                            <div className='f-12'><i className="fa fa-inr text-muted">18,500</i></div>
                        </div>
                        <div className='border border-danger rounded danger-3 p-2 my-2'>
                            <div className='d-flex justify-content-between'>
                                <div className='text-danger'>Limited time offer</div>
                                <div className='f-12 text-muted'>- <i className="fa fa-inr">18,401</i></div>
                            </div>
                            <div className='text-danger'><span className='px-1'><img width={15} src={LimitedTimeIcon} /></span>Offer valid till 25th march 2023</div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>Total <span className='text-muted'>(incl. of 18% GST)</span></div>
                            <div className='h5'><i className="fa fa-inr text-muted">149</i></div>
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='col-md-6 f-12'>
                            <button className='btn border border-danger text-danger w-100'>CANCEL</button>
                        </div>
                        <div className='col-md-6 f-12'>
                            <button className='btn btn-success text-white w-100 f-14'>PROCEED TO PAY</button>
                        </div>
                    </div>
                    <div>
                        <img width={70} src={RazorPay} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default PayComponent