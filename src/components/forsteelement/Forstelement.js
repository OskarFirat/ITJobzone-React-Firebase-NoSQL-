import React, { Component } from 'react';
import './Forstelement.css';


export default class Forstelement extends Component {
    render() {


        return (
            <div>

                <div className="row">
                  <div className="d-none d-md-block col-lg-1" style={{backgroundColor:'rgb(237,28,36)'}}></div>
                  <div className="col-sm-4 col-md-4 col-lg-3" id="forsteBodyElement1">
                     <div className="forsteBodyElementIkonerIMidten">
                        <i className="fa fa-registered fa-3x" aria-hidden="true"></i>
                     </div>
                     <div className="forsteBodyElementMedTekst">
                         <p><b> Step 1: Click Registration</b></p>
                         <p> By just click`in the registration button<br/>
                         you will open a new world of opportunities!</p>
                     </div>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4" id="forsteBodyElement2">
                     <div className="forsteBodyElementIkonerIMidten">
                         <i class="fa fa-user-plus fa-3x" aria-hidden="true"></i>
                     </div>
                     <div className="forsteBodyElementMedTekst">
                         <p><b> Step 2: Write your CV</b></p>
                         <p> With only a few adjustment and answering<br/>
                         a couple of questions. You are ready to face<br/> the job market!</p>
                     </div>   
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-3" id="forsteBodyElement3">
                     <div className="forsteBodyElementIkonerIMidten">
                         <i class="fa fa-handshake-o fa-3x" aria-hidden="true"></i>
                     </div>
                     <div className="forsteBodyElementMedTekst">
                         <p><b> Step 3: Get Hired</b></p>
                         <p> We have milions of companies looking daily<br/>
                         for new developers and therefore a job offer is<br/>
                         just around the corner!</p>
                     </div>
                  </div>
                  <div className="d-none d-md-block col-lg-1" style={{backgroundColor:'rgb(237,28,36)'}}></div>
                </div>
                <br/><br/><br/>
                
            </div>
        )
    }
}
