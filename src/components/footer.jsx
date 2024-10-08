import React from 'react'
//import { Link } from 'react-router-dom';
import '../components/footer.css'
import logo from '../assets/mediamonk_logo.png'
import { Link } from 'react-scroll';

export const Footer = () => {


    return (
        <footer>
            <div className='footer pt-5 pb-5 pe-2 ps-2' style={{ background: '#181B22', color: 'white' }}>
                <div className='footer-content'>
                    <div className='row w-100' id='footer' style={{ textAlign: 'left' }}>
                        <div className='col-md-3 mb-5' id='foot1'>
                            <a href='/'>
                            <img src={logo} alt='logo' style={{ width: '100px' }} />
                            </a>


                        </div>
                        <div className='col-md-3 mb-4'>
                            <h3 style={{ color: '#DDA74F' }}>Usefull links</h3>
                            <div className='d-flex' style={{ flexDirection: 'column' }}>
                                <Link to="home" smooth={true} duration={500} className='mb-3' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>Home</Link>
                                <Link to="about" smooth={true} duration={500} className='mb-3' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>About Us</Link>
                                <Link to="services" smooth={true} duration={500} className='mb-3' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>Services</Link>
                            </div>
                        </div>
                        <div className='col-md-3 mb-4'>
                            <h3 style={{ color: '#DDA74F' }}>Services</h3>
                            <div className='d-flex' style={{ flexDirection: 'column' }}>
                                <p>Web Design</p>
                                <p>Graphic Design</p>
                                <p>Web Development</p>
                                <p>Marketing</p>
                            </div>
                        </div>
                        <div className='col-md-3 mb-4'>
                            <h3 style={{ color: '#DDA74F' }}>Contact</h3>
                            <div className='d-flex' style={{ flexDirection: 'column' }}>
                                <p>Phone number</p>
                                <p>E-mail</p>
                                <div className='d-flex' style={{ gap: '10px', marginTop: '10px' }}>
                                    {/* <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                                        <i className='fab fa-facebook social_media'></i>
                                    </a>
                                    <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                                        <i className='fab fa-twitter social_media'></i>
                                    </a> */}
                                    <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                                        <i className='fab fa-instagram social_media'></i>
                                    </a>
                                    <a href='https://www.linkedin.com/in/media-monks-a39b30323/?trk=public-profile-join-page' target='_blank' rel='noopener noreferrer'>
                                        <i className='fab fa-linkedin social_media'></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </footer>
    )
};
