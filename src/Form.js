import './Form.css';
import { useState } from 'react';
import Card from './Card';

const Form = () => {

    const [companyName, setCompanyName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [companyDescription, setCompanyDescription] = useState("")
    const [streetAddress, setStreetAddress] = useState("")
    const [email, setEmail] = useState("")
    const [cardActive, setcardActive] = useState("hidden")
    const [formActive, setFormActive] = useState("block")

    const handleSubmitData = (event) => {
        event.preventDefault();
        setcardActive("block");
        setFormActive("hidden");
    }

    const handleCompanynameChange = (event) => {
        setCompanyName(event.target.value)
    }

    const handleCompanyDescriptionChange = (event) => {
        setCompanyDescription(event.target.value)
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value)
    }

    const handleStreetAddressChange = (event) => {
        setStreetAddress(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    return(
        <div>
            <div className={formActive}>
                <div className="login-box">
                <h2>Build your Business Card</h2>
                <form>
                    <div className="user-box">
                        <input type="text" value={companyName} onChange={handleCompanynameChange}/>
                        <label>Company Name / Full name</label>
                    </div>
                    <div className="user-box">
                        <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange}/>
                        <label>Phone Number</label>
                    </div>
                    <div className="user-box">
                        <input type="text" value={streetAddress} onChange={handleStreetAddressChange}/>
                        <label>Street Address</label>
                    </div>
                    <div className="user-box">
                        <input type="text" value={companyDescription} onChange={handleCompanyDescriptionChange}/>
                        <label>Company Description / Job Title</label>
                    </div>
                    <div className="user-box">
                        <input type="email" value={email} onChange={handleEmailChange}/>
                        <label>E-mail address</label>
                    </div>
                    <button onClick={handleSubmitData}>
                        <span />
                        <span />
                        <span />
                        <span />
                        Build my card
                    </button>
                </form>
                </div>
            </div>
            <div className={cardActive}>
                <Card 
                    companyname = {companyName} 
                    phonenumber = {phoneNumber}
                    streetaddress = {streetAddress}
                    companydescription = {companyDescription}
                    email = {email}   
                />
            </div>
        </div>


    )
}

export default Form;
