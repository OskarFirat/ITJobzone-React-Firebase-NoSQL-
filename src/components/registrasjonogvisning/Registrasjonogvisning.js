import React, { Component } from 'react';
import fire from '../kontaktDatabase/Fire.js';
import firebase from 'firebase/app';
import {withRouter} from "react-router-dom";
import './registrasjonogvisning.css';


class Registrasjonogvisning extends Component {
    state = {
        forNavn: '',
        etterNavn: '',
        epost: '',
        telefon: '',
        password1: '',
        password2: '',
        optionSelect: 'Front-End',
        kjonn: '',
        progammeringsprak: {},
        soknad: '',
        vanligInputbox: 'form-control form-control-lg',
        erorrFornavnInputbox: 'form-control form-control-lg',
        erorrEmailInputbox: 'form-control form-control-lg',
        erorrPassword1Inputbox: 'form-control form-control-lg',
        erorrPassword2Inputbox: 'form-control form-control-lg',
        errorFornavn: false,
        errorFornavnValidering: false,
        errorFeilmeldingFornavn: '',
        errorEmail: false,
        errorEmailValidering: false,
        errorFeilmeldingEmail: '',
        errorPassword1: false,
        errorPassword1Validering: false,
        errorFeilmeldingPassword1: '',
        errorPassword2: false,
        errorPassword2Validering: false,
        errorFeilmeldingPassword2: '',
        checkboxJavascript: false,
        checkboxJava: false,
        checkboxPHP: false,
        checkboxPython: false,
        checkboxCSharp: false,
        checkboxSomethingElse: false,
        user: {},
        nyBruker: false,
        loggetInn: false
}   
 
onChange = (e) => this.setState({ [e.target.name]: e.target.value });

kjappValideringFornavn = () =>{
    if(this.state.forNavn.length > 1){
        this.setState({ erorrFornavnInputbox: 'is-valid form-control form-control-lg', errorFornavn: false, errorFornavnValidering: true, errorFeilmeldingFornavn: '' });
    } else {
        this.setState({ erorrFornavnInputbox: 'is-invalid form-control form-control-lg',  errorFornavn: true, errorFornavnValidering: false, errorFeilmeldingFornavn: 'Please write your First Name, with more then 1 letter.' });
    }
}

kjappValideringEmail = () =>{
    if(/^[0-9a-zA-ZøæåØÆÅ .\- ]{4,30}@[a-zA-ZøæåØÆÅ .\- ]{1,20}$/.test(this.state.epost)){
        this.setState({ erorrEmailInputbox: 'is-valid form-control form-control-lg', errorEmail: false, errorEmailValidering: true, errorFeilmeldingEmail: '' });
    } else {
        this.setState({ erorrEmailInputbox: 'is-invalid form-control form-control-lg',  errorEmail: true, errorEmailValidering: false, errorFeilmeldingEmail: 'Please write your Email, with more then 3 letters, then @ and then your service provider and dot before closing with your national destination. Example: Ole@gmail.com' });
    }
}

kjappValideringPassword1 = () =>{
    if(this.state.password1.length > 6){
        this.setState({ erorrPassword1Inputbox: 'is-valid form-control form-control-lg', errorPassword1: false, errorPassword1Validering: true, errorFeilmeldingPassword1: '' });
    } else {
        this.setState({ erorrPassword1Inputbox: 'is-invalid form-control form-control-lg',  errorPassword1: true, errorPassword1Validering: false, errorFeilmeldingPassword1: 'Please write your Password longer then 6 characters.' });
    }
}

kjappValideringPassword2 = () =>{
    if(this.state.password1 == this.state.password2){
        this.setState({ erorrPassword2Inputbox: 'is-valid form-control form-control-lg', errorPassword2: false, errorPassword2Validering: true, errorFeilmeldingPassword2: '' });
    } else {
        this.setState({ erorrPassword2Inputbox: 'is-invalid form-control form-control-lg',  errorPassword2: true, errorPassword2Validering: false, errorFeilmeldingPassword2: 'Please write your Password as the same as your Password above.' });
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
    if(this.state.errorFornavnValidering == true && this.state.errorEmailValidering == true && this.state.errorPassword2Validering == true && this.state.errorPassword1Validering == true){
        return true;
    } else {
        return false;
    }
}

componentDidMount() {
    this.authListener();
}

authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggetInn: true }); 
        this.setState({ user });
            if(this.state.nyBruker){
            fire.auth().signInWithEmailAndPassword(this.state.epost, this.state.password2).then((bruker)=>{
            }).catch((error) => {
                console.log(error);
                });     
            const checkboxVerdier = this.checkboxVerdiInsetting();
            const db = firebase.firestore();
            db.collection("Brukere").doc("" + this.state.user.uid + "").set({
                Firstname: this.state.forNavn,
                Lastname: this.state.etterNavn,
                phoneNumber: this.state.telefon,
                Email: this.state.epost,
                Gender: this.state.kjonn,
                Password: this.state.password2, 
                ITWorkArea: this.state.optionSelect,
                Programminglanguages: checkboxVerdier,
                coverLetter: this.state.soknad
            })
            if(this.state.nyBruker){
                this.setState({
                    forNavn: '',
                    etterNavn: '',
                    epost: '',
                    telefon: '',
                    password1: '',
                    password2: '',
                    optionSelect: 'Front-End',
                    kjonn: '',
                    progammeringsprak: {},
                    soknad: '',
                    vanligInputbox: 'form-control form-control-lg',
                    erorrFornavnInputbox: 'form-control form-control-lg',
                    erorrEmailInputbox: 'form-control form-control-lg',
                    erorrPassword1Inputbox: 'form-control form-control-lg',
                    erorrPassword2Inputbox: 'form-control form-control-lg',
                    checkboxJavascript: false,
                    checkboxJava: false,
                    checkboxPHP: false,
                    checkboxPython: false,
                    checkboxCSharp: false,
                    checkboxSomethingElse: false
                })
            }
            this.setState({ nyBruker: false });
            this.props.history.push('/signupogvisning');
        }
      } else {
        this.setState({ user: null });
        this.setState({ loggetInn: false });
      }
    });
}

SignUp = () =>{
    fire.auth().createUserWithEmailAndPassword(this.state.epost, this.state.password2).then((bruker)=>{
    }).catch((error) => {
        console.log(error);
    });

    this.setState({nyBruker: true});
}

onSubmit = () =>{
    const ervalid = this.Validering();
    if(ervalid === true){
        this.SignUp();
    }
}

render() {

    const {forNavn, etterNavn, epost, telefon, soknad, password1, password2, optionSelect, kjonn, progammeringsprak, loggetInn } = this.state;

    return (
        <div>
            { loggetInn == true ? ( 
            <div style={{ marginBottom: '38%'}}> 

            </div> ) : null }

            { loggetInn == false ? ( 
            <div className="container" style={{marginTop:'60px'}}>
                <div className="card mb-3">
                    <div className="card-header">
                        <p style={{fontWeight:'bold', fontSize:'20px', marginLeft:'20px'}} >Please Register you CV</p>
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
                                placeholder="Write you Phone Nr here..."
                                value={telefon}
                                onChange={this.onChange} 
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text"
                                name="epost"
                                className={
                                this.state.erorrEmailInputbox
                                }
                                placeholder="Write you E-mail here..."
                                value={epost}
                                onChange={this.onChange} 
                                onBlur={this.kjappValideringEmail} 
                                />
                                {this.state.errorEmail ? ( 
                                    <div style={{color:'red'}}>{this.state.errorFeilmeldingEmail}</div>
                                    ) : null
                                }
                            </div>
                            <div className="form-group">
                            <label>What is your gender?</label>
                            <br/>
                                <input type="radio" value="Male" name="kjonn" onChange={this.onChange} /> Male
                                <input type="radio" value="Female" name="kjonn" onChange={this.onChange} style={{marginLeft: '10px'}} /> Female
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password"
                                name="password1"
                                className={
                                this.state.erorrPassword1Inputbox 
                                }
                                placeholder="Write your Password here..."
                                value={password1}
                                onChange={this.onChange} 
                                onBlur={this.kjappValideringPassword1} 
                                />
                                {this.state.errorPassword1 ? ( 
                                    <div style={{color:'red'}}>{this.state.errorFeilmeldingPassword1}</div>
                                    ) : null
                                }
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password"
                                name="password2"
                                className={
                                this.state.erorrPassword2Inputbox 
                                }
                                placeholder="Confirm your Password here..."
                                value={password2}
                                onChange={this.onChange} 
                                onBlur={this.kjappValideringPassword2} 
                                />
                                {this.state.errorPassword2 ? ( 
                                    <div style={{color:'red'}}>{this.state.errorFeilmeldingPassword2}</div>
                                    ) : null
                                }
                            </div>
                            <div className="form-group">
                            <label>Pick your favorite IT work area?</label>
                                <br/>
                                <select 
                                name="optionSelect" 
                                value={optionSelect} 
                                onChange={this.onChange}>
                                    <option value="Front-End">Front-End</option>
                                    <option value="Back-End">Back-End</option>
                                    <option value="Database">Database</option>
                                    <option value="Internet of Things">Internet of Things</option>
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
            </div> ) : null }

        </div>
    )
  }
}

export default withRouter(Registrasjonogvisning);