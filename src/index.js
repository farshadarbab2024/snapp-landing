
import ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';

import './scss/index.scss'; 
import './scss/dana-font-import.scss' ; 

import FirstView from './components/first_view.js' ;
import VehicleSelect from './components/vehicle_select.js' ; 
import IncomeCalculator from './components/income_calculator.js';
import FixedRegisterButton from './components/fixed_register_button.js';
import Features from './components/features.js';
import FAQ from './components/FAQ.js' ;
import Reviews from './components/reviews.js' ;
import Footer from './components/footer.js' ;


function LandingPage(){
    const targetRef = useRef(null) ;

    return(
        <>
            <main>

                <FirstView targetRef={targetRef} />
                <VehicleSelect />
                <IncomeCalculator />
                <Features />
                <FAQ />
                <Reviews />
                <FixedRegisterButton targetRef={targetRef} />
            </main>

            <Footer />
        </>
    ) ;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LandingPage />); 