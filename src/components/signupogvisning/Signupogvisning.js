import React, { Component } from 'react';
import fire from '../kontaktDatabase/Fire.js';
import firebase from 'firebase/app';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './signupogvisning.css';
import {withRouter} from "react-router-dom";

class Signupogvisning extends Component {
    state={
            forNavn: '',
            etterNavn: '',
            epost: '',
            telefon: '',
            optionSelect: 'Front-End',
            hentetPassword: '',
            kjonn: '',
            progammeringsprak: {},
            soknad: '',
            vanligInputbox: 'form-control form-control-lg',
            erorrFornavnInputbox: 'form-control form-control-lg',
            erorrEmailInputbox: 'form-control form-control-lg',
            erorrPassword1Inputbox: 'form-control form-control-lg',
            erorrPassword2Inputbox: 'form-control form-control-lg',
            errorFornavn: false,
            errorFornavnValidering: true,
            errorFeilmeldingFornavn: '',
            errorEmail: false,
            errorEmailValidering: false,
            errorFeilmeldingEmail: '',
            checkboxJavascript: false,
            checkboxJava: false,
            checkboxPHP: false,
            checkboxPython: false,
            checkboxCSharp: false,
            checkboxSomethingElse: false,
            hvisLoggInn: false,
            hvisLoggInn2: true,
            eks: false,
            betingelseLoggInn: '',
            EmailSignUp: '',
            PasswordSignUp: '',
            EmailLoggInn: '',
            PasswordLoggInn: '',
            hvisAllInfo: false,
            slettetData: false,
            visFeilmedlingForLoggInn: false,
            visRedigering: false, 
            brukerID: '',
            user: {},
            tabell: []
        };
        
        handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
        
        LoggInn = () =>{
            fire.auth().signInWithEmailAndPassword(this.state.EmailLoggInn, this.state.PasswordLoggInn).then((bruker)=>{
                this.setState({ hvisLoggInn: true, visFeilmedlingForLoggInn: false });
            }).catch((error) => {
            console.log(error);
                this.setState({ hvisLoggInn: false, visFeilmedlingForLoggInn: true  });
            });
        }

        componentDidMount() {
            this.authListener();
            const data = {
                Firstname: 'Loading...',
                Lastname: ' ',
                phoneNumber: 'Loading... ',
                Email: 'Loading... ',
                Gender: 'Loading... ',
                ITWorkArea: 'Loading... ',
                Programminglanguages: 'Loading... ',
                coverLetter: 'Loading... ',
            }
            this.setState({ tabell: data });
        }
        
        authListener = () => {
            fire.auth().onAuthStateChanged((user) => {
              if (user) {
                this.setState({ hvisLoggInn: true });
                const db = firebase.firestore();
                const docRef = db.collection('Brukere').doc("" + user.uid + "");
                this.setState({ brukerID: user.uid});
                docRef.get().then((doc) => {
                    let data = doc.data();
                    this.setState({ tabell: data, betingelseLoggInn: false });
                    this.setState({ forNavn: this.state.tabell.Firstname, etterNavn: this.state.tabell.Lastname, telefon: this.state.tabell.phoneNumber, epost: this.state.tabell.Email, kjonn: this.state.tabell.Gender, optionSelect: this.state.tabell.ITWorkArea, hentetPassword: this.state.tabell.Password, progammeringsprak: this.state.tabell.Programminglanguages, soknad: this.state.tabell.coverLetter});
                    if (this.state.tabell.Programminglanguages.includes('Javascript,')) { 
                        this.setState({
                            checkboxJavascript: true,
                        });
                    }
                    if (this.state.tabell.Programminglanguages.includes('PHP,')) { 
                        this.setState({
                            checkboxPHP: true,
                        });
                    }
                    if (this.state.tabell.Programminglanguages.includes('Java,')) { 
                        this.setState({
                            checkboxJava: true
                        })
                    }
                    if (this.state.tabell.Programminglanguages.includes('Python,')) { 
                        this.setState({
                            checkboxPython: true,
                        });
                    }
                    if (this.state.tabell.Programminglanguages.includes('C#,')) { 
                        this.setState({
                            checkboxCSharp: true,
                        });
                    }
                    if (this.state.tabell.Programminglanguages.includes('Something else')) { 
                        this.setState({
                            checkboxSomethingElse: true
                        });
                    }
                });
                
              } else {
                this.setState({ user: null, hvisLoggInn: false, betingelseLoggInn: true });
                if(this.state.eks == true){
                    const db = firebase.firestore();
                    db.collection('Brukere').doc("" + this.state.brukerID + "").delete();
                    this.props.history.push('/');
                }
              }
            });
        }

        onChange = (e) => this.setState({ [e.target.name]: e.target.value });

        kjappValideringFornavn = () =>{
            if(this.state.forNavn.length > 1){
                this.setState({ erorrFornavnInputbox: 'is-valid form-control form-control-lg', errorFornavn: false, errorFornavnValidering: true, errorFeilmeldingFornavn: '' });
            } else {
                this.setState({ erorrFornavnInputbox: 'is-invalid form-control form-control-lg',  errorFornavn: true, errorFornavnValidering: false, errorFeilmeldingFornavn: 'Please write your First Name, with more then 1 letter.' });
            }
        }

        toggleChangeJavascript = () => {
            this.setState(prevState => ({
                checkboxJavascript: !prevState.checkboxJavascript,
            }));
        }

        toggleChangePHP = () => {
            this.setState(prevState => ({
                checkboxPHP: !prevState.checkboxPHP,
            }));
        }

        toggleChangeJava = () => {
            this.setState(prevState => ({
                checkboxJava: !prevState.checkboxJava,
            }));
        }

        toggleChangePython = () => {
            this.setState(prevState => ({
                checkboxPython: !prevState.checkboxPython,
            }));
        }

        toggleChangeCSharp = () => {
            this.setState(prevState => ({
                checkboxCSharp: !prevState.checkboxCSharp,
            }));
        }

        toggleChangeSomethingElse = () => {
            this.setState(prevState => ({
                checkboxSomethingElse: !prevState.checkboxSomethingElse,
            }));
        }

        checkboxVerdiInsetting = () =>{
            var checkboxSamletVerdier = new Array();
            if(this.state.checkboxJavascript == true){
                checkboxSamletVerdier.push("Javascript");
            }
            if(this.state.checkboxPHP == true){
                checkboxSamletVerdier.push("PHP");
            }
            if(this.state.checkboxJava == true){
                checkboxSamletVerdier.push("Java");
            }
            if(this.state.checkboxPython == true){
                checkboxSamletVerdier.push("Python");
            }
            if(this.state.checkboxCSharp == true){
                checkboxSamletVerdier.push("C#");
            }
            if(this.state.checkboxSomethingElse == true){
                checkboxSamletVerdier.push("Something else");
            }
            let endeligVerdierAvCheckbox = "";
                if(checkboxSamletVerdier.length > 1){
                    for(var i=0;i<(checkboxSamletVerdier.length);i++){
                        endeligVerdierAvCheckbox = endeligVerdierAvCheckbox + checkboxSamletVerdier[i] + ", ";
                    }
                        return endeligVerdierAvCheckbox; 
                } else {
                        return checkboxSamletVerdier; 
                }
            }

        Validering = () =>{
            if(this.state.errorFornavnValidering == true){
                return true;
            } else {
                return false;
            }
        }

        onSubmit = () =>{
            const ervalid = this.Validering();
                if(ervalid === true){
                    const db = firebase.firestore();
                    const checkboxVerdier = this.checkboxVerdiInsetting();
                        db.collection("Brukere").doc("" + this.state.brukerID + "").set({
                                Firstname: this.state.forNavn,
                                Lastname: this.state.etterNavn,
                                phoneNumber: this.state.telefon,
                                Email: this.state.epost,
                                Gender: this.state.kjonn,
                                Password: this.state.hentetPassword, 
                                ITWorkArea: this.state.optionSelect,
                                Programminglanguages: checkboxVerdier,
                                coverLetter: this.state.soknad
                    })
                    this.setState({ hvisLoggInn2: !this.state.hvisLoggInn2, visRedigering: !this.state.visRedigering, hvisAllInfo: false, progammeringsprak: checkboxVerdier });
                    const docRef = db.collection('Brukere').doc("" + this.state.brukerID + "");
                    docRef.get().then((doc) => {
                        let data = doc.data();
                        this.setState({ tabell: data, betingelseLoggInn: false });
                        this.setState({ forNavn: this.state.tabell.Firstname, etterNavn: this.state.tabell.Lastname, telefon: this.state.tabell.phoneNumber, epost: this.state.tabell.Email, kjonn: this.state.tabell.Gender, optionSelect: this.state.tabell.ITWorkArea, hentetPassword: this.state.tabell.Password, progammeringsprak: this.state.tabell.Programminglanguages, soknad: this.state.tabell.coverLetter});
                    }) 
                }
        }

        componentWillUnmount() {
            fire.auth().signOut();
        }

        onDeleteClick = () =>{
            this.setState({ eks: true });
            this.componentWillUnmount();
            document.getElementById("myForm").style.display = "none";
        }

        openForm = () =>{
            document.getElementById("myForm").style.display = "block";
            this.setState({hvisLoggInn: false});
        }
          
        closeForm  = () =>{
            document.getElementById("myForm").style.display = "none";
            this.setState({hvisLoggInn: true});
        }

        settInnVerdier = () =>{
            const db = firebase.firestore();
            const docRef = db.collection('Brukere').doc("" + this.state.brukerID + "");
                docRef.get().then((doc) => {
                    let data = doc.data();
                    this.setState({ tabell: data });
                    this.setState({ forNavn: this.state.tabell.Firstname, etterNavn: this.state.tabell.Lastname, telefon: this.state.tabell.phoneNumber, epost: this.state.tabell.Email, kjonn: this.state.tabell.Gender, optionSelect: this.state.tabell.ITWorkArea, hentetPassword: this.state.tabell.Password, progammeringsprak: this.state.tabell.Programminglanguages, soknad: this.state.tabell.coverLetter});
                })
            if (this.state.tabell.Programminglanguages.includes('Javascript,')) { 
                this.setState(prevState => ({
                    checkboxJavascript: prevState.checkboxJavascript,
                }));
            }
            if (this.state.tabell.Programminglanguages.includes('PHP,')) { 
                this.setState(prevState => ({
                    checkboxPHP: prevState.checkboxPHP,
                }));
            }
            if (this.state.tabell.Programminglanguages.includes('Java,')) { 
                this.setState(prevState => ({
                    checkboxJava: prevState.checkboxJava,
                }));
            }
            if (this.state.tabell.Programminglanguages.includes('Python,')) { 
                this.setState(prevState => ({
                    checkboxPython: prevState.checkboxPython,
                }));
            }
            if (this.state.tabell.Programminglanguages.includes('C#,')) { 
                this.setState(prevState => ({
                    checkboxCSharp: prevState.checkboxCSharp,
                }));
            }
            if (this.state.tabell.Programminglanguages.includes('Something else')) { 
                this.setState(prevState => ({
                    checkboxSomethingElse: prevState.checkboxSomethingElse,
                }));
            }
        }

    render() {

        const { EmailLoggInn, PasswordLoggInn, hvisLoggInn, hvisLoggInn2, hvisAllInfo, betingelseLoggInn, visFeilmedlingForLoggInn, visRedigering, forNavn, etterNavn, telefon, soknad, optionSelect, kjonn, progammeringsprak, loggetInn } = this.state; 

        return (
            <div>

                {hvisLoggInn == false && betingelseLoggInn == true ? (
                <div className="container" style={{marginTop:'170px'}}>
                    <div style={{width:'600px', margin:'auto'}}>
                        <div className="card mb-1" style={{ margin: 'auto', width:'100%', borderRadius: '25px'}}>
                            <div className="card-header"  style={{ borderRadius: '25px'}}>
                                <div className="card-body">
                                    <div style={{left:'35%', position: 'absolute'}}>
                                        <p style={{fontWeight:'bold', fontSize: '40px', display: 'inline-block'}}>Login</p>
                                        <FontAwesomeIcon style={{color: '#ed1c24', display: 'inline-block', fontSize: '2.5em', marginLeft: '10px'}} icon={faLock} />
                                    </div>
                                    <br/><br/><br/>
                                    <div style={{marginTop: '10px'}}>
                                        <form>
                                            <label style={{left:'20%', position: 'absolute'}}>Email: </label>
                                            <input
                                            style={{left:'35%', position: 'absolute'}}
                                            type="text"
                                            name="EmailLoggInn"
                                            value={EmailLoggInn} 
                                            onChange={this.handleChange} /> 
                                            <br/><br/>
                                            <label style={{left:'20%', position: 'absolute'}}>Password: </label> 
                                            <input
                                            style={{left:'35%', position: 'absolute'}}
                                            type="password" 
                                            name="PasswordLoggInn"
                                            value={PasswordLoggInn}
                                            onChange={this.handleChange} />
                                            <br/><br/>
                                            <input type="button" value="Log In" onClick={this.LoggInn} style={{left:'45%', position: 'absolute'}} className="btn btn-success" />
                                            <br/><br/>
                                        </form> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        { visFeilmedlingForLoggInn == true ? (
                              <div class="alert alert-danger" role="alert" style={{marginTop: '25px'}}>
                                Please write your correct E-Mail and Password! 
                              </div>
                            ) : null }
                    </div>
                </div> ) : null}

                {visRedigering == true? (
                <div>
                  <div className="container" style={{marginTop:'60px'}}>
                    <div className="card mb-3">
                        <div className="card-header">
                            <p style={{fontWeight:'bold', fontSize:'20px', marginLeft:'20px'}}> Edit your CV here</p>
                            <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text"
                                    name="forNavn"
                                    className={
                                        this.state.erorrFornavnInputbox 
                                    }
                                    placeholder="Write you Firstname here..."
                                    value={forNavn}
                                    onChange={this.onChange} 
                                    onBlur={this.kjappValideringFornavn} 
                                    />
                                    {this.state.errorFornavn ? ( 
                                        <div style={{color:'red'}}>{this.state.errorFeilmeldingFornavn}</div>
                                        ) : null
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text"
                                    name="etterNavn"
                                    className={
                                    this.state.vanligInputbox
                                    }
                                    placeholder="Write you Lastname here..."
                                    value={etterNavn}
                                    onChange={this.onChange} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone number</label>
                                    <input type="text"
                                    name="telefon"
                                    className={
                                    this.state.vanligInputbox
                                    }
                                    placeholder="Write you Phone Number here..."
                                    value={telefon}
                                    onChange={this.onChange} 
                                    />
                                </div>
                                <div className="form-group">
                                <label>What is your gender?</label>
                                <br/>
                                    <input type="radio" value="Male" name="kjonn" onChange={this.onChange} checked={this.state.kjonn === "Male"}/> Male
                                    <input type="radio" value="Female" name="kjonn" onChange={this.onChange} style={{marginLeft: '10px'}} checked={this.state.kjonn === "Female"}/> Female
                                </div>
                                <div className="form-group">
                                <label>Pick your favorite IT work area?</label>
                                    <br/>
                                    <select 
                                    name="optionSelect" 
                                    value={optionSelect} 
                                    onChange={this.onChange}>
                                        <option value="Front-End" checked={this.state.optionSelect === "Front-End"}>Front-End</option>
                                        <option value="Back-End" checked={this.state.optionSelect === "Back-End"}>Back-End</option>
                                        <option value="Database" checked={this.state.optionSelect === "Database"}>Database</option>
                                        <option value="Internet of Things" checked={this.state.optionSelect === "Internet of Things"}>Internet of Things</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                <label>Which of these programming lanuages are you able to program in?</label>
                                <br/>
                                    <label>
                                        <input type="checkbox"
                                        name="progammeringsprak"
                                        onChange={this.toggleChangeJavascript}
                                        checked={this.state.checkboxJavascript}
                                        style={{marginLeft: '10px', marginRight:'5px'}} />
                                        Javascript
                                    </label>
                                    <label>
                                        <input type="checkbox"
                                        name="progammeringsprak"
                                        onChange={this.toggleChangePHP}
                                        checked={this.state.checkboxPHP}
                                        style={{marginLeft: '10px', marginRight:'5px'}} />
                                        PHP
                                    </label>
                                    <label>
                                        <input type="checkbox"
                                        name="progammeringsprak"
                                        onChange={this.toggleChangeJava}
                                        checked={this.state.checkboxJava}
                                        style={{marginLeft: '10px', marginRight:'5px'}} />
                                        Java
                                    </label>
                                    <label>
                                        <input type="checkbox"
                                        name="progammeringsprak"
                                        onChange={this.toggleChangeCSharp}
                                        checked={this.state.checkboxCSharp}
                                        style={{marginLeft: '10px', marginRight:'5px'}} />
                                        C#
                                    </label>
                                    <label>
                                        <input type="checkbox"
                                        name="progammeringsprak"
                                        onChange={this.toggleChangePython}
                                        checked={this.state.checkboxPython}
                                        style={{marginLeft: '10px', marginRight:'5px'}} />
                                        Python
                                    </label>
                                    <label>
                                        <input type="checkbox"
                                        name="progammeringsprak"
                                        onChange={this.toggleChangeSomethingElse}
                                        checked={this.state.checkboxSomethingElse}
                                        style={{marginLeft: '10px', marginRight:'5px'}} />
                                        Something else
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>Please write your Cover Letter?</label>
                                    <textarea name="soknad" 
                                    className={
                                    this.state.vanligInputbox 
                                    } 
                                    placeholder="Write you Cover Letter here..."
                                    value={soknad} 
                                    onChange={this.onChange} 
                                    />
                                </div>
                                <input type="button" value="Submit" 
                                className="btn btn-success btn-block" 
                                onClick={this.onSubmit}/>
                            </form>   
                        </div>
                        </div>
                    </div>
                    <input type="button" value="Cancel Edit" style={{marginTop: '25px'}} 
                                className="btn btn-primary btn-block" 
                                onClick={()=> this.setState({ hvisLoggInn2: !this.state.hvisLoggInn2, visRedigering: !this.state.visRedigering })}/>
                 </div>
                </div> 
                ) : null }

                {hvisLoggInn == true && hvisLoggInn2 == true ? (
                <div className="container" style={{marginTop:'170px'}}>
                    <div className="card card-body mb-3">
                    <h4> CV og Søknad: <span style={{color: 'rgb(237,28,36)'}}> { this.state.tabell.Firstname + " " + this.state.tabell.Lastname } </span> <i onClick={()=> this.setState({ hvisAllInfo: !this.state.hvisAllInfo})} 
                    className="fa fa-caret-down" style={{cursor: 'pointer', marginLeft: '10px'}}></i>
                    <i className="fa fa-times" 
                    style={{cursor: 'pointer', float: 'right', color: 'red'}}
                    onClick={this.openForm} 
                    ></i><i onClick={() => {
                        this.setState({
                            hvisLoggInn2: !this.state.hvisLoggInn2, visRedigering: !this.state.visRedigering
                         });
                         this.settInnVerdier();
                     }} className="fa fa-pencil" 
                    style={{cursor: 'pointer', float: 'right', color: '#353535', marginRight: '25px'}} 
                    ></i>
                    </h4>
                    {hvisAllInfo ? (<ul className="list-group"><br/> 
                        <li className="list-group-item"><b>Firstname</b>:<br/> { this.state.tabell.Firstname } </li>                    
                        <li className="list-group-item"><b>Lastname:</b><br/> { this.state.tabell.Lastname } </li>   
                        <li className="list-group-item"><b>Phone number</b>:<br/> { this.state.tabell.phoneNumber } </li>                    
                        <li className="list-group-item"><b>Email:</b><br/> { this.state.tabell.Email } </li>     
                        <li className="list-group-item"><b>Gender:</b><br/> { this.state.tabell.Gender } </li>                    
                        <li className="list-group-item"><b>Favorite IT work area:</b><br/> { this.state.tabell.ITWorkArea } </li>     
                        <li className="list-group-item"><b>Amount of programming lanuages that you know:</b><br/> { this.state.tabell.Programminglanguages } </li>                    
                        <li className="list-group-item"><b>Søknad:</b><br/> { this.state.tabell.coverLetter } </li>                  
                    </ul>) : null }
                    </div>
                </div> ) : null }

                <div style={{marginBottom: '450px'}}>
                    <div className="form-popup" id="myForm" style={{display:'none'}}>
                        <form action="/action_page.php" className="form-container">
                            <div id="top"></div>
                                <h1 style={{textAlign:'center'}}>Deleting User</h1>
                                <br/>
                                <p>Are you sure you want to delete user: { this.state.tabell.Firstname + " " + this.state.tabell.Lastname }?</p>
                                <div id="knappeContainer"> 
                                    <button type="button" id="Knappene" className="btn" onClick={this.onDeleteClick}>Delete</button>
                                    <button type="button" id="Knappene" className="btn cancel" onClick={this.closeForm}>Cancel</button>
                                </div>
                            <div id="bottom"></div>
                        </form>
                    </div>
                </div>

                {hvisAllInfo == false? (<div style={{marginTop:'370px'}}>
                </div> ) : null}

            </div>
        )
    }
}

export default withRouter(Signupogvisning);

