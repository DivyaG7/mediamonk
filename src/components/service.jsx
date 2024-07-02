import React from 'react'
import { Carousel } from 'react-bootstrap';



export const Service = () => {
    return (
        <div>
            <Carousel indicators={false}>
                <Carousel.Item style={{backgroundColor: '#181B22'}}>
                    {/* <img
                    className="d-block w-100"
                    src={Branding}
                    alt="Branding-service"
                /> */}
                    <div className='row p-5 mt-5 mb-5' style={{backgroundColor: '#886b3c'}}>
                        <div className='col-md-4 mb-3 d-flex justify-content-center' style={{flexDirection: 'column', textAlign: 'left'}}>
                            <p style={{textAlign: 'left', color: 'white'}}>[WE TAKE CARE ABOUT]</p>
                            <p className='text-white'>Team of experts is dedicated to delivering exceptional
                                results and helping you achieve your business goals.
                                From strategic brand development to targeted digital
                                marketing campaigns, we have you covered.</p>
                        </div>
                        <div className='col-md-4 mb-3 d-flex justify-content-center align-items-center'>
                            <div className='row'>
                                <h1 style={{fontSize: '90px'}}>01</h1>
                                <h2>Branding</h2>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3 d-flex justify-content-center align-items-center'>
                            <div className='row' style={{color: '#CFCDCD9C'}}>
                                <p>Brand messaging</p>
                                <p>Naming</p>
                                <p>Logo Design</p>
                                <p>Visual Identity</p>
                                <p>Package Design</p>
                                <p>Brand Book</p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item style={{backgroundColor: '#181B22'}}>
                    {/* <img
                    className="d-block w-100"
                    src={Visual}
                    alt="Visual-service"
                /> */}
                <div className='row p-5 mt-5 mb-5' style={{backgroundColor: '#886b3c'}}>
                        <div className='col-md-4 mb-3 d-flex justify-content-center align-items-center' style={{textAlign: 'left'}}>
                            <p className='text-white'>Team of experts is dedicated to delivering exceptional
                                results and helping you achieve your business goals.
                                From strategic brand development to targeted digital
                                marketing campaigns, we have you covered.</p>
                        </div>
                        <div className='col-md-4 mb-3 d-flex justify-content-center align-items-center'>
                            <div className='row'>
                                <h1 style={{fontSize: '90px'}}>02</h1>
                                <h2>Visual</h2>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3 d-flex justify-content-center align-items-center'>
                            <div className='row' style={{color: '#CFCDCD9C'}}>
                                <p>Print Design</p>
                                <p>Advertising Design</p>
                                <p>Infographic Design</p>
                                <p>Publication Design</p>
                                <p>Package Design</p>
                                <p>Presentation Design</p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item style={{backgroundColor: '#181B22'}}>
                    {/* <img
                    className="d-block w-100"
                    src={Digital}
                    alt="Digital-service"
                /> */}
                <div className='row p-5 mt-5 mb-5' style={{backgroundColor: '#886b3c'}}>
                        <div className='col-md-4 mb-3 d-flex justify-content-center align-items-center' style={{textAlign: 'left'}}>
                            <p className='text-white'>Digital marketing encompasses a wide range of strategies and techniques used to promote products, services, or brands through digital channels. </p>
                        </div>
                        <div className='col-md-4 mb-3 d-flex justify-content-center align-items-center'>
                            <div className='row'>
                                <h1 style={{fontSize: '90px'}}>03</h1>
                                <h2>Digital</h2>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3 d-flex justify-content-center align-items-center'>
                            <div className='row' style={{color: '#CFCDCD9C'}}>
                                <p>Search Engine Optimization (SEO)</p>
                                <p>Content Marketing</p>
                                <p>Social Media Marketing</p>
                                <p>Email Marketing</p>
                                <p>Email / WhatsApp / Text Marketing</p>
                                <p>UI/UX - Website Development</p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
