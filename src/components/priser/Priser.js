import React, { Component } from 'react';
import './priser.css';

export default class Priser extends Component {
    render() {
        return (
            <div>
               <div id="prisSeksjonen">
                <div className="row">
                    <span className="col-sm-0 col-md-4 col-lg-4"></span>
                    <div id="prisOverskrift" className="col-sm-5 col-md-3 col-lg-3">
                        <h1><b>Price</b></h1>
                        <p style={{whiteSpace:'nowrap'}}>These are our competitve prices.</p>
                    </div>
                    <span className="col-sm-4 col-md-4 col-lg-4"></span>
                </div>
                <div className="row">
                    <div className="col-sm-2 col-md-1 col-lg-1"></div>
                        <div className="col-sm-8 col-md-3 col-lg-3">
                            <div className="columns" id="priseboksene">
                                <ul className="price" style={{border:'1px solid black'}}>
                                    <li className="header" id="priseboksrad1">Basic</li>
                                    <li className="grey" id="priseboksrad2"><b>$9.99 / year</b></li>
                                    <li id="priseboksrad3">Standard Opning Hours</li>
                                    <li id="priseboksrad4">3 day wait for E-mail reply</li>
                                    <li className="grey" id="priseboksrad5"><button href="#" className="button" id="signUpKnapp">Sign Up</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-8 col-md-3 col-lg-3">
                            <div className="columns" id="priseboksene">
                                <ul className="price" style={{border:'1px solid black'}}>
                                    <li className="header" id="priseboksrad1">Premium</li>
                                    <li className="grey" id="priseboksrad2"><b>$19.99 / year</b></li>
                                    <li id="priseboksrad3">7 to 23 Opning Hours except Sunday`s</li>
                                    <li id="priseboksrad4">2 day wait for E-mail reply</li>
                                    <li className="grey" id="priseboksrad5"><button href="#" className="button" id="signUpKnapp">Sign Up</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-8 col-md-3 col-lg-3">
                            <div className="columns" id="priseboksene">
                                <ul className="price" style={{border:'1px solid black'}}>
                                    <li className="header" id="priseboksrad1">Exclusive</li>
                                    <li className="grey" id="priseboksrad2"><b>$49.99 / year</b></li>
                                    <li id="priseboksrad3">Every day 24 Hour phone access</li>
                                    <li id="priseboksrad4">Max 24 Hour wait for E-mail reply</li>
                                    <li className="grey" id="priseboksrad5"><button href="#" className="button" id="signUpKnapp">Sign Up</button></li>
                                </ul>
                            </div>
                        </div>
                    <div className="col-sm-2 col-md-1 col-lg-1"></div>
                </div>
            </div>
                
        </div>
        )
    }
}
