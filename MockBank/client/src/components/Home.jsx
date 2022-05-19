import React, { Component } from 'react'
import '../static/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Form, Button } from 'react-bootstrap'
import img1 from '../img/mobile.webp'
import img2 from '../img/help.jpeg'
import img3 from '../img/peace.jpeg'

const mapStyles = {
    width: '500px',
    height: '300px'
};

export class MapContainer extends Component {
    render(){
    return (
        <div>
            <header>
                <h1>Welcome to Bank!</h1>
                <div className="links">
                    <p>About Us</p>
                    <p>Services</p>
                    <p>For Business</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <input className="search" placeholder="Search bank.com"></input>
                </div>
            </header>
            <div className = "Image" style={{ 
                backgroundImage: "url(/man.jpeg)"}}>
                <h1 className = "saving">Start Saving Today!</h1>
                <div className="form">
                    <Form>
                        <Form.Group>
                            <Form.Label className="login">Log in to your account</Form.Label>
                            <Form.Control placeholder="Username"></Form.Control>
                            <Form.Control className="pass" placeholder="Password"></Form.Control>
                            <p className="forgot">Forgot Password</p>
                            <Form.Check className="remember" type="switch" id="custom-switch" label="Remember Me"/>
                        </Form.Group>
                        <button className="cont">Continue</button>
                    </Form>
                </div>
            </div>
            <div className="products">
                <p>Products for all your financial needs.</p>
            </div>
            <div className="titles">
                <p className="personal">Personal</p>
                <p className="business">Business</p>
            </div>
            <div className="rows">
                <div className="col1">
                    <div>
                        <p style={{color: 'aquamarine', fontSize: 25}}>Robust banking.</p>
                        <p>With checking and savings accounts, money market funds, and more, get the products and services to meet your daily banking needs.</p>
                    </div>
                    <div>
                        <p style={{color: 'aquamarine', fontSize: 25}}>Loans for life's needs.</p>
                        <p>Use an Bank mortgage, auto loan, credit card, or other financing to fund life’s most important purchases—big or small.</p>
                    </div>
                </div>
                <div className="col2">
                    <div>
                        <p style={{color: 'aquamarine', fontSize: 25}}>Everyday banking.</p>
                        <p style={{}}>Meet all your business banking needs with everything from checking and savings accounts to packages for medical and legal businesses.</p>
                    </div>
                    <div>
                        <p style={{color: 'aquamarine', fontSize: 25}}>Loans for growth.</p>
                        <p>Use an Bank credit line, credit card, or auto loan to help build the business of your dreams.</p>
                    </div>
                </div>
            </div>
            <div className="slider">
                <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src={img1} className="sliderimg"/>
                    <img src={img2} className="sliderimg"/>
                    <img src={img3} className="sliderimg"/>
                </AliceCarousel>
            </div>
            <div className="contact">
                <div>
                    <form className="connect">
                        <label className="contactForm">Connect with us!</label>
                        <input placeholder="email" className="emailForm"></input>
                        <button className="cont">Submit</button>
                    </form>
                </div>
                <div className="map">
                    <Map
                        google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={
                            {
                                lat: 38.865110,
                                lng: -104.859542
                            }
                        }
                    />
                </div>
            </div>
            <div className="footer">
                <p>We provide links to external websites for convenience. Bank does not endorse and is not responsible for their content, links, privacy, or security policies.</p>
                <p>About Bank | Careers | Privacy, Cookies, Security & Legal | Report Fraud | Notice of Data Collection | Diversity & Accessibility | Home | Sitemap</p>
            </div>
        </div>
    )
}
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBwyZdxrMenFJ7K2cbnrhxfvQkgGjsufPU'
})(MapContainer);
