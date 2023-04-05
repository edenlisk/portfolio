import React from "react";
import { TiTick } from 'react-icons/ti';

const Pricing = () => {

    return (
        <div className="pricing-container container-fluid d-flex flex-column justify-content-center">
            <div className="d-flex flex-column justify-content-center align-items-center py-3">
                <h4 className="pricing-title">PRICING</h4>
                <h1 className="big-title text-white">Get yours today</h1>
                <p className="pricing-paragraph text-center">
                    I use software to help you scale your business operations,<br/> grow, and achieve more
                </p>
            </div>
            <div className="row d-flex gy-3 justify-content-center py-3 lh-lg">
                <div className="col-10 col-md-3">
                    <ul className="list-unstyled text-white fw-bold activities">
                        <li><TiTick size="30" style={{color: '#ea9aa7'}}/>Development</li>
                        <li><TiTick size="30" style={{color: '#ea9aa7'}}/>App features</li>
                        <li><TiTick size="30" style={{color: '#ea9aa7'}}/>Prototyping</li>
                    </ul>
                </div>
                <div className="col-10 col-md-3">
                    <ul className="list-unstyled text-white fw-bold activities">
                        <li><TiTick size="30" style={{color: '#ea9aa7'}}/>Finance cases</li>
                        <li><TiTick size="30" style={{color: '#ea9aa7'}}/>App features</li>
                        <li><TiTick size="30" style={{color: '#ea9aa7'}}/>IT services</li>
                    </ul>
                </div>
                <div className="col-10 col-md-3">
                    <ul className="list-unstyled text-white fw-bold activities">
                        <li><TiTick size="30" style={{color: '#ea9aa7'}}/>24/7 support</li>
                        <li><TiTick size="30" style={{color: '#ea9aa7'}}/>Design thinking</li>
                        <li><TiTick size="30" style={{color: '#ea9aa7'}}/>New product</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Pricing;