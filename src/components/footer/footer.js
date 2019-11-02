import React, { Component } from 'react';
import './footer.css';

export default class footer extends Component {
    render() {
        return (
            <div>
                <div className="rammeRundtHeleFooter">
                    <div className="rammeRundtFooter">
                        <div className="footerOverskrift">
                            <span style={{color:'rgb(237,28,36)'}}>IT</span><span style={{color:'white'}}>-JOB</span>
                            <span style={{color:'rgb(237,28,36)'}}>ZONE</span>
                        </div>
                        <div className="footerIlinje">
                            <p><b>Company information</b></p>
                            <p>Monday - Saturday: 08 - 17</p>
                            <p>ITJOBZONE@ITJobzoneAS.com</p>
                            <p>0047+ 41376347</p>
                            <p>Osloveien 85</p>
                        </div>
                        <div className="footerIlinje">
                            <p><b>Area of work</b></p>
                            <p>Front-End</p>
                            <p>Back-End</p>
                            <p>Database</p>
                            <p>Internet of Things</p>
                        </div>
                        <div className="footerIlinje">
                            <p><b>Services</b></p>
                            <p>Connecting People</p>
                            <p>Approval of Developers</p>
                            <p>Helping Companies</p>
                            <p>Improving the IT-Job market</p>
                        </div>
                        <div className="footerUndertekst">
                            <p><b>Created by: Oskar Firat</b></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
