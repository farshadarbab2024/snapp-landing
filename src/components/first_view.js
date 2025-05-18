import PhoneInput from './phone_input.js' ;
import Slider from './slider.js' ;

import "../scss/first_view.scss"

function FirstView({ targetRef }){
    
    return(
        <section id="section1" className="white_section">
            <div id="section1_div1">
                <h1 className="text-center title first-view-title">ثبت نام راننده، پیک موتوری، وانت</h1>
                <span className="text-center text-font margin-top2 first-view-short-text">با هر کیلومتر درآمد کسب کنید!</span>

                <div id="register_form_div">
                    <PhoneInput />
                    <input type="button" id="register_button" value="ثبت‌نام و پیگیری" ref={targetRef}/>
                </div>
            </div>
            <Slider />
        </section>
    ) ;
}

export default FirstView ;