import { useState } from "react" ; 
import "../scss/phone_input.scss" ;

function PhoneInput(){
    const [phoneValue, setPhoneValue] = useState("") ; 

    const handlePhoneInput = (e) => {  
        setPhoneValue(e.target.value) ;
    }

    const cleanPhoneInput = () => {
        setPhoneValue("") ; 
    }
    return(
        <div id="phone_input_div" className={phoneValue ? "phone-input-div-has-value" : ""}>
            <input type="tel" id="phone_input" placeholder="09xxxxxxxxx" onChange={handlePhoneInput} value={phoneValue} />
            <label id="phone_input_label" className="fixed-text-font" htmlFor="phone_input">شماره موبایل</label>
            {phoneValue && ( // show just when phone_input has a value. 
                <div id="clean_phone_input_div" onClick={cleanPhoneInput}>
                    <img src={process.env.PUBLIC_URL + "/images/remove.png"} id="clean_phone_input_img" alt="cross" />
                </div>
            )}
        </div>
    ) ; 
}

export default PhoneInput ;