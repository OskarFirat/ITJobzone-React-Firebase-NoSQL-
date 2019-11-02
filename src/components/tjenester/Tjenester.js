import React, { Component } from 'react';
import './tjenester.css';

export default class Tjenester extends Component {
    render() {
        return (
            <div>
                
                <div className="row" style={{marginTop:'0px', marginBottom:'20px'}}>
                    <span className="col-sm-5 col-md-5 col-lg-5"></span>
                    <div id="ServiceOverskirft" class="col-sm-2 col-md-2 col-lg-2">
                        <h1><b>Services</b></h1>
                        <hr style={{backgroundColor:'rgb(53,53,53)', height:'8px', textAlign:'center', paddingRight:'35px', paddingLeft:'35px', marginBottom:'70px'}}/>
                    </div>
                    <span className="col-sm-5 col-md-5 col-lg-5"></span>
                </div>
                <div className="row">
                  <div className="d-none d-md-block col-lg-1"></div>
                  <div className="col-sm-3 col-md-4 col-lg-3" id="serviceBodyElement1">
                   <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <i class="fa fa-address-book fa-4x" aria-hidden="true" id="serviceMellomrom"></i>
                          <br/><br/>
                          <h2 id="overskriftService">Get Connected</h2>
                          <p id="teksttService"> Get in touch with new and <br/>aspiring developers!</p>
                        </div>
                        <div className="flip-card-back">
                          <i class="fa fa-address-book fa-4x" aria-hidden="true" id="serviceMellomrom"></i>
                          <br/><br/>
                          <h2 id="overskriftService">Instant Connection</h2>
                          <p id="teksttService">We will immediately get you connected <br/> to your developer of choice.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-md-4 col-lg-4">
                    <div className="flip-card" id="serviceBodyElement2">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <i class="fa fa-check-circle fa-4x" aria-hidden="true" id="serviceMellomrom"></i>
                          <br/><br/>
                          <h3 id="overskriftService">Approved Developers</h3>
                          <p id="teksttService"> We conduct background test on<br/> all of our developers.</p>
                        </div>
                        <div className="flip-card-back">
                          <i class="fa fa-check-circle fa-4x" aria-hidden="true" id="serviceMellomrom"></i>
                          <br/><br/>
                          <h2 id="overskriftService">Test Approved</h2>
                          <p id="teksttService">All of the developers on this website<br/> have also gone through <br/> regiously testing.</p>
                        </div>
                      </div>
                    </div>  
                  </div>
                  <div className="col-sm-1" style={{display:'none'}} id="hjelpeKolonne"></div>
                  <div className="col-sm-3 col-md-4 col-lg-3" id="serviceBodyElement3">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <i class="fa fa-product-hunt fa-4x" aria-hidden="true" id="serviceMellomrom"></i>
                              <br/><br/>
                              <h2 id="overskriftService">Portfolio</h2>
                              <p id="teksttService">All of the registered developers <br/>have top quality portfolio!</p>
                            </div>
                            <div className="flip-card-back">
                              <i class="fa fa-product-hunt fa-4x" aria-hidden="true" id="serviceMellomrom"></i>
                              <br/><br/>
                              <h2 id="overskriftService">Project Approval</h2>
                              <p id="teksttService">All projects in the portfolio is <br/>checked and tested.</p>
                            </div>
                          </div> 
                       </div>
                   </div>
                  <div className="d-none d-md-block col-lg-1"></div>
                </div>
                
            </div>
        )
    }
}
