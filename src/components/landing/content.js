import React from 'react'
import JobIcon from '../../assets/images/job-icon.svg'
import HoursIcon from '../../assets/images/hours-icon.svg'
import WebinarIcon from '../../assets/images/webinar-icon.svg'
import ScholarshipIcon from '../../assets/images/scholarship-icon.svg'
import AdsIcon from '../../assets/images/ads-icon.svg'

const Content = () => {
    return (
        <div className="text-white">
            <div>
                <p className="h3 spacing-2">Access curated courses worth</p>
                <p className='h3 spacing-2'>
                    <i className="fa fa-inr"></i><del className='mx-2'>18500</del>
                    at just 
                    <span className='text-primary px-1'><i className="fa fa-inr"></i>99</span>
                    per year!
                </p>
            </div>
            <div className='py-2'>
                <p>
                    <span className='mr-5'>
                        <img width={40} src={JobIcon} />
                    </span>
                    <span className='px-5 h5'> 
                        <span className='text-primary px-1'>100+</span>
                    Job relevent courses</span>
                </p>
            </div>
            <div className='py-2'>
                <p>
                    <span>
                        <img width={40} src={HoursIcon} />
                    </span>
                    <span className='px-5 h5'>
                        <span className='text-primary px-1'>20,000+</span> 
                        Hours of content
                    </span>
                </p>
            </div>
            <div className='py-2'>
                <p>
                    <span>
                        <img width={40} src={WebinarIcon}/>
                    </span>
                    <span className='px-5 h5'>
                        <span className='text-primary px-1'>Exclusive</span> 
                        webinar access
                    </span>
                </p>
            </div>
            <div className='py-2'>
                <p>
                    <span>
                        <img width={40} src={ScholarshipIcon} />
                    </span> 
                    <span className='px-5 h5'>
                        Scholarships worth 
                        <span className='text-primary px-1'><i className="fa fa-inr"></i>94,500</span>
                    </span>
                </p>
            </div>
            <div className='py-2'>
                <p className='text-lg'>
                    <span>
                        <img width={40} src={AdsIcon} />
                    </span>
                    <span className='px-5 h5'>
                        <span className='text-primary px-1'>Ad Free</span>
                        learning experience
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Content