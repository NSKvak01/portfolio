import React, { Component } from 'react';
import Axios from "../utils/Axios "
import {isEmpty, isEmail} from "validator"
import { toast } from 'react-toastify';
import './ContactPage.css'

export class ContactPage extends Component {
    state={
        name: '',
        email: '',
        message:'',
        nameOnFocus: '',
        emailOnFocus: '',
        messageOnFocus:'',
        nameError: '',
        emailError: '',
        messageError:'',
        result:null,
        isButtonDisabled:true
    };
    
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.isButtonDisabled ===true){
            if(
                this.state.name.length!==0 &&
                this.state.email.length!==0 &&
                this.state.message.length!==0){
                    if(
                        this.state.nameError.length===0 &&
                        this.state.emailError.length===0 &&
                        this.state.messageError.length===0){
                            this.setState({
                                isButtonDisabled:false
                            })
                        }
            }
        }
    }
    
    handleInputs = (event)=>{
        if(isEmpty(this.state[event.target.name])){
            this.setState({
                [`${event.target.name}Error`]:`Please type ${event.target.name}`,
                isButtonDisabled:true
            })
        }else{
                this.setState({
                    [`${event.target.name}Error`]:'',
                })
            }
    }
    
    handleEmailInput = (event)=>{
        if(isEmpty(this.state.email)){
            this.setState({
                emailError:"Please type email",
                submitButtonDisabled:true
            })
        } else{
            if(!isEmail(this.state.email)){
                this.setState({
                submitButtonDisabled:true,
                emailError:"Please type in email format"
                })
            } else {
                this.setState({
                    emailError:""
                })
            }
        }
    }
    
    handleOnChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        },()=>{
            this.handleInputs(event)
            if(event.target.name==="email"){
                this.handleEmailInput(event)
            }
        })
    }
    
    handleInputOnFocus = (event)=>{
        if(!this.state[`${event.target.name}OnFocus`]){
            this.setState({
                [`${event.target.name}OnFocus`]:true
            })
        }
    }
    
    handleOnBlur = (event)=>{
        if(isEmpty(event.target.value)){
            this.setState({
                [`${event.target.name}Error`]:`Please type ${event.target.name}`
            })
        }
    }
    
    sendEmail = async event => {
        event.preventDefault();
        try {
            let email = {
                name:this.state.name,
                email:this.state.email,
                message:this.state.message
            }
            let result = await Axios.post('/api/email/send', email)
            console.log(result.data)
            this.setState({ 
                name: '', 
                email: '',
                message:'',
                result:result
            });
            toast.success(this.state.result.message)
    
            console.log("success")
    
        } catch (error) {
            console.log(error)
            toast.error(this.state.result.message)
        }
    };
    
    render() {
    return (
        <React.Fragment>
            <div id="q">Thank you for reaching out!<br />How can I help you?</div>
            <form className="emailform" onSubmit={this.sendEmail}>
                <div className="inputWithButton">
                    <div className="inputNoButton">
                    <div className="nameEmail">
                        <div className="inputGroup">
                        <div controlId="name" className="labelGroup">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleOnChange}
                            onBlur={this.handleOnBlur}
                            onFocus={this.handleOnFocus}
                            className="formInput"
                        />
                        </div>
                        <span className="formError">
                        {this.state.nameError && this.state.nameError}
                        </span>
                        </div>
                        <div className="inputGroup">
                        <div controlId="email" className="labelGroup">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleOnChange}
                            onBlur={this.handleOnBlur}
                            onFocus={this.handleOnFocus}
                            className="formInput"
                        />
                        </div>
                        <span className="formError">
                        {this.state.emailError && this.state.emailError}
                        </span>
                        </div>
                        </div>

                        <div className="inputGroup">
                        <div controlId="message"  className="labelGroup">
                        <label>Message</label>
                        <textarea
                            as="textarea"
                            name="message"
                            value={this.state.message}
                            rows="3"
                            onChange={this.handleOnChange}
                            onBlur={this.handleOnBlur}
                            onFocus={this.handleOnFocus}
                            className="formInput"
                            id="message"
    
                        ></textarea>
                        </div>
                        <span className="formError">
                        {this.state.messageError && this.state.messageError}
                        </span>
                        </div>
                    </div>
                    <div className="buttonemail">
                    <button variant="primary" type="submit" disabled={this.state.isButtonDisabled} id="submit">
                    Send message
                    </button>
                    </div>
                </div>
            </form>
        </React.Fragment>
        );
        };
    }
    
    export default ContactPage;
    