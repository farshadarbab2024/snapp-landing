import React, { useEffect, useState } from 'react' ;
import '../scss/fixed_register_button.scss' ;
function FixedRegisterButton({ targetRef }){
    const [showSection, setShowSection] = useState(false) ; 

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowSection(!entry.isIntersecting) ;
            },
            { threshold: 0.1 } 
        )

        if(targetRef.current){
            observer.observe(targetRef.current) ;
        }

        return () => {
            if (targetRef.current){
                observer.unobserve(targetRef.current) ;
            }
        } ;
    }, []) ;

    return(
        <>
            {showSection && (
                <>
                    <section id="fixed_register_button_section">
                        <input type="button" id="fixed_register_button" value="ثبت‌نام و پیگیری" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                    </section>
                    <div id="endy_space"></div> {/* vertically space to avoiding overlap */}
                </>
            )}
        </>
    ) ;
}

export default FixedRegisterButton ;