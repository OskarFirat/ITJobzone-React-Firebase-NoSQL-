import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    render() {   
        
        return (
            <div>
                <div className="rammeRundtHeader">
                    <div style={{display: 'inline-block', marginRight: '1.5%', paddingRight:'2%'}} className="logo">
                        <Link to="/">
                            <p><span className="logoTekstBanner1">IT</span><span className="logoTekstBanner2">
                            -JOB</span><span className="logoTekstBanner1">ZONE</span></p>
                        </Link>
                    </div>
                    <div style={{display: 'inline-block', marginRight: '1.5%', paddingRight:'2%'}} className="mediaQueryHeader">
                        <div className="iLineHeader">
                            <i class="fa fa-clock-o fa-2x" aria-hidden="true" style={{color:'rgb(237,28,36)'}}></i>
                        </div>
                        <div className="iLineHeader" style={{lineHeight: 0.8, paddingLeft: '7px'}}>
                            <p><b>Openings hours:</b></p>
                            <p>Monday - Saturday: 08 - 17</p>
                        </div>
                    </div>
                    <div style={{display: 'inline-block', marginRight: '1.5%', paddingRight:'2%'}} className="mediaQueryHeader">
                        <div className="iLineHeader">
                            <i class="fa fa-envelope fa-2x" aria-hidden="true" style={{color:'rgb(237,28,36)'}}></i>
                        </div>
                        <div className="iLineHeader" style={{lineHeight: 0.8, paddingLeft: '7px'}}>
                            <p><b>E-mail:</b></p>
                            <p>ITJOBZONE@ITJobzoneAS.com</p>
                        </div>
                    </div>
                    <div style={{display: 'inline-block', marginRight: '1.5%', paddingRight:'2%'}} className="mediaQueryHeader">
                        <div className="iLineHeader">
                            <i class="fa fa-volume-control-phone fa-2x" aria-hidden="true" style={{color:'rgb(237,28,36)', paddingBottom: '15px'}}></i>
                        </div>
                        <div className="iLineHeader" style={{lineHeight: 0.8, paddingLeft: '7px'}}>
                            <p><b>Phone:</b></p>
                            <p>0047+ 41376347</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


 