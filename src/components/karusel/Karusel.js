import React, { Component } from 'react';
import './karusel.css';
import bakgrunnsbilde1 from './bakgrunn111.jpg';
import bakgrunnsbilde2 from './bakgrunn2222.jpg';
import { Link } from 'react-router-dom';

export default class Karusel extends Component {
  render() {
    return (
      <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="4000">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active" interval="4000">
                <img id="bildene" style={{height: '100%', width: '100%'}} src={bakgrunnsbilde1} alt="First slide"/>
                    <div className="carousel-caption" id="overskriftSlide1">
                    <h3 id="overskirft1Slide1">Are you their next</h3>
                    <h1 id="overskirft2Slide1">Computer Developer</h1>
                    <hr/>
                    <p id="overskirft3Slide1">Register your CV NOW! Get hired Today!</p>
                    <div></div>
                    <Link to="/registrasjonogvisning">
                      <button id="knappForSlide1" type="button" class="btn btn-danger btn-lg">REGISTER YOUR CV HERE!</button>   
                    </Link>
                  </div>
                </div>
                <div className="carousel-item" interval="4000">
                <img id="bildene" style={{height: '100%', width: '100%'}} src={bakgrunnsbilde2} alt="Second slide"/>
                  <div className="carousel-caption">
                    <h5 style={{color:'rgb(237,28,36)'}}><b id="overskriftSlide2">IT<span style={{color:'rgb(53,53,53)'}}>-JOB</span>ZONE:</b></h5>
                    <p id="overskirft1Slide2">We help you showcase your CV<br/> 
                        and skills to millions of companies.</p>
                      <Link to="/registrasjonogvisning">
                        <button type="button" id="knappForSlide2" className="btn btn-danger btn-lg">REGISTER HERE!</button> 
                      </Link>
                  </div>
                </div>
                <div className="carousel-item" interval="4000">
                  <img id="bildene" style={{height: '100%', width: '100%'}} src={require('./bakgrunn333.jpg')} alt="Third slide" />
                  <div className="carousel-caption">
                    <h5 id="overskriftSlide3">Your company`s new developer?</h5>
                    <p id="overskirft1Slide3">We have now added more new back-end developer <br/>capabilties to our registration. It`s now more easier and<br/> accurate to find yourself a worker that fits
                    <br/> your company`s needs!</p>
                    <Link to="/registrasjonogvisning">
                      <button type="button" id="knappForSlide3" className="btn btn-danger btn-lg">REGISTER YOUR CV HERE!</button>
                    </Link>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span><i className="fa fa-angle-left fa-3x" aria-hidden="true" id="venstreSlideForsyver" style={{fontWeight: 'Bolder'}}></i></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span><i className="fa fa-angle-right fa-3x" aria-hidden="true" id="hoyreSlideForsyver" style={{fontWeight: 'Bolder'}}></i></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
      </div>
    )
  }
}
