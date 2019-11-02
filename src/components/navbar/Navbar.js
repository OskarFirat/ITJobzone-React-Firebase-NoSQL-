import React, { Component } from 'react';
import './navbar.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import fire from '../kontaktDatabase/Fire.js';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faLinkedinIn, faTwitter, faInstagram, faYoutube );


export default class Navbar extends Component {
  state = {
    loggetInnHer: true,
    loggetInnFirebase: false
  }

  aktiverDropdownKnapp = () =>{
    $("#nav-icon3").toggleClass("open");
  }

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggetInnHer: true });
        this.setState({ loggetInnFirebase: true });
      } else {
        this.setState({ user: null });
        this.setState({ loggetInnHer: true });
        this.setState({ loggetInnFirebase: false });
      }
    });
}

  SignOut = () =>{
    fire.auth().signOut();
    this.setState({loggetInnHer: true})
    this.setState({ loggetInnFirebase: false });
  }

  render() {

    return (
      <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-lignt">
                  <div className="d-flex flex-row order-lg-1" id="rammeRundtNavbar">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" onClick={this.aktiverDropdownKnapp}>
                        <div id="nav-icon3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                      <ul className="navbar-nav flex-row" id="beggeKnappene">
                        <li className="nav-item">
                            <Link to="/registrasjonogvisning">
                              <button type="button" className="btn btn-danger" style={{marginRight: '10px', backgroundColor:'rgb(237,28,36)' }} id="knapperINavbar">Registration</button>
                            </Link> 
                        </li>
                        <li className="nav-item">
                            
                            {this.state.loggetInnHer == true && this.state.loggetInnFirebase == false ? (
                              <Link to="/signupogvisning">
                                <button type="button" className="btn btn-success" style={{paddingRight: '20px', whiteSpace:'nowrap'}} id="knapperINavbar">Log in</button>
                              </Link>
                              ) : (
                                <Link to="/">
                                  <button type="button" className="btn btn-primary" style={{paddingRight: '20px', whiteSpace:'nowrap'}} id="knapperINavbar" onClick={this.SignOut}>Log Out</button>
                                </Link>
                                )  }  
                            
                        </li>
                    </ul>
                </div>  
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav" id="rammeRundtNavbar">
                      <li className="nav-item" id="LenkeneUnderHover" style={{backgroundColor:'rgb(237,28,36)', color: 'white !important', display: 'inline-block !important', listStyleType: 'none'}}>
                        <Link to="/">
                            <a className="nav-link" id="Lenkene">HOME</a> 
                        </Link>
                      </li>
                        <li className="nav-item dropdown" id="LenkeneUnderHover" style={{display: 'inline-block !important', listStyleType: 'none'}}>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        id="Lenkene" class="dropdown-toggle">SERVICE</a> 
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> 
                          <a className="dropdown-item" href="#" style={{fontSize: '12px'}}>FRONT-END</a>
                          <a className="dropdown-item" href="#" style={{fontSize: '12px'}}>BACK-END</a>
                          <a className="dropdown-item" href="#" style={{fontSize: '12px'}}>DATABASE</a>
                          <a className="dropdown-item" href="#" style={{fontSize: '12px'}}>INTERNET OF THINGS</a>
                        </div>
                      </li> 
                      <li className="nav-item" id="LenkeneUnderHover" style={{display: 'inline-block !important', listStyleType: 'none'}}>
                        <Link to="/DummyPage">
                          <a className="nav-link" href="#" id="Lenkene">BLOG</a>
                        </Link>
                      </li>
                      <li className="nav-item" id="LenkeneUnderHover" style={{display: 'inline-block !important', listStyleType: 'none'}}>
                        <Link to="/DummyPage">
                          <a className="nav-link" href="#" id="Lenkene">MEDIA</a>
                        </Link>
                      </li> 
                      <li className="nav-item" id="LenkeneUnderHover" style={{display: 'inline-block !important', listStyleType: 'none'}}>
                        <Link to="/registrasjonogvisning">
                          <a className="nav-link" href="#" id="Lenkene">REGISTRATION</a>
                        </Link>
                      </li>
                      <li className="nav-item" id="LenkeneUnderHover" style={{display: 'inline-block !important', listStyleType: 'none'}}>
                        <Link to="/DummyPage">
                          <a className="nav-link" href="#" id="Lenkene" style={{whiteSpace:'nowrap'}}>ABOUT US</a>
                        </Link>
                      </li>   
                      <li className="nav-item" id="LenkeneUnderHover" style={{display: 'inline-block !important', listStyleType: 'none'}}>
                        <Link to="/DummyPage">
                          <a className="nav-link" href="#" id="Lenkene" style={{whiteSpace:'nowrap'}}>CONATCT US</a>
                        </Link>
                      </li> 
                        <li className="nav-item" id="navbarIkoner" style={{marginLeft:'20px', display: 'inline-block !important', listStyleType: 'none'}}>
                        <Link to="/DummyPage">
                          <a className="nav-link" href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']} size="3x" style={{marginTop:'2px'}}/></a>
                        </Link>
                      </li> 
                      <li className="nav-item" id="navbarIkoner" style={{display: 'inline-block !important', listStyleType: 'none'}}>
                        <Link to="/DummyPage">
                          <a className="nav-link" href="#"><FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" style={{marginTop:'14px'}}/></a>
                        </Link>
                      </li>
                      <li className="nav-item" id="navbarIkoner" style={{display: 'inline-block !important', listStyleType: 'none'}}>
                        <Link to="/DummyPage">
                          <a className="nav-link" href="#"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" style={{marginTop: '14px', color: '#33CCFF', borderRadius: '8px', 
                          padding:'8px', backgroundColor: 'white'}}/></a>
                        </Link>
                      </li> 
                      <li className="nav-item" id="navbarIkoner" style={{display: 'inline-block !important', listStyleType: 'none'}}>
                        <Link to="/DummyPage">
                          <a className="nav-link" href="#"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/></a>
                        </Link> 
                      </li> 
                      <li className="nav-item" id="navbarIkoner" style={{display: 'inline-block !important', listStyleType: 'none'}}>
                        <Link to="/DummyPage">
                          <a className="nav-link" href="#"><FontAwesomeIcon icon={['fab', 'youtube']} size="2x"/></a>
                        </Link>
                      </li> 
                    </ul>
                </div>  
            </nav>
        
      </div>
    )
  }
}
