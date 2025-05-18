import '../scss/reviews.scss' ;
import React, { useState, useEffect } from 'react' ;

function Reviews(){
    const [currentIndex, setCurrentIndex] = useState(0) ;

    const [isDragging, setIsDragging] = useState(false) ; 
    const [startX, setStartX] = useState(0) ; 
    const [diff, setDiff] = useState(0) ;

    const handleMouseDown = (e) => {
        setIsDragging(true) ; 
        setStartX(e.touches ? e.touches[0].clientX : e.clientX) ;

    } ;

    
    const handleMouseMove = (e) => {
        if(!isDragging) return ;
        const currentX = e.touches ? e.touches[0].clientX : e.clientX ;
        setDiff(currentX - startX) ;

    }

    const handleMouseUp = () => {
        setIsDragging(false) ; 

        if(diff > 50) previousReview() ;
        if(diff < -50) nextReview() ;

        setDiff(0) ; 


    } ;

    const reviews = [
        {
            fullname: "محمد عزیزی", 
            img: "/images/profile-picture1.png",
            review: "بنده از کودکی دچار نوعی معلولیت بودم و چون خجالت می‌کشیدم که مشکلم رو با بقیه به صورت حضوری بیان کنم، تا به امروز نمی تونستم به صورت حضوری ثبت‌نام کنم. با ثبت‌نام آنلاین خیلی راحت کارها رو انجام و الان عضوی از خانواده اسنپم."
        },
        {
            fullname: "داوود افتخاری", 
            img: "/images/profile-picture2.png",
            review: "من اینستاگرام باشگاه رانندگان اسنپ رو دنبال می‌کردم و تخفیف‌ها و طرح‌هایی که می‌ذاشتن همیشه برام جذاب بود، ولی بخاطر دور بودن خونه‌مون فرصت نمی‌شد ثبت‌نام کنم. با این ثبت ‌نام آنلاین خیلی سریع کارام رو انجام دادم و الان تو اسنپم."
        }, 
        {
            fullname: "احسان عزیزی", 
            img: "/images/profile-picture3.png",
            review: "وقتی فهمیدم اسنپ به راننده‌هاش لاستیک با قیمت دولتی میده، راغب شدم که ثبت‌نام کنم ولی اصلا فرصت نمی‌کردم و همیشه یادم می‌رفت. الان با ثبت‌نام آنلاین خیلی راحت و سریع مدارکمو ارسال کردمو کارمو انجام دادم و بالاخره اسنپی شدم."
        }
    ] ;

    
    const [numberOfSlideFrame, setNumberOfSlideFrame] = useState(reviews.length - 1) ;
    useEffect(() => {
        const width = window.innerWidth ;

        if(width <= 767){
            setNumberOfSlideFrame(reviews.length - 1) ;
        }else if(width <= 1024){
            setNumberOfSlideFrame(reviews.length - 2); 
        }else{
            setNumberOfSlideFrame(reviews.length - 3) ;
        }
    }) ;

    const nextReview = () => {
        if(currentIndex >= (numberOfSlideFrame)){
            return ; 
        }
        setCurrentIndex(currentIndex + 1) ;

    } ;

    const previousReview = () => {
        if(currentIndex <= 0){
            return ;
        }
        setCurrentIndex(currentIndex - 1) ;
    }
    return(
        <section id="reviews_container1">
            <h2 className="title text-center margin-top8">کاربران درباره اسنپ رانندگان چه گفته‌اند؟</h2>
            <div id="reviews_container2">
                <div id="reviews_container3"
                onMouseDown={(e) => handleMouseDown(e)}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={(e) => handleMouseDown(e)}
                onTouchMove={(e) => handleMouseMove(e)}
                onTouchEnd={handleMouseUp}
                style={{
                    transform: `translateX(${diff}px)`,
                    transition: isDragging ? "none" : "0.3s",
                }}
                >
                    {
                        reviews.map((review) => {
                            return(
                                <div key={review["fullname"]} className="review-card" style={{transform: `translateX(calc(-${currentIndex * 1}rem - ${currentIndex * 100}%))`,}}>
                                    <div className="fullname_img_div">
                                        <img src={review["img"]} className="review_img" alt={"تصویر پروفایل " + review["fullname"]} />
                                        <span className="review_fullname">{review["fullname"]}</span>
                                    </div>
                                    <p className="review-text text-align-justify margin-top2">{review["review"]}</p>
                                </div>
                            ) ;
                        })
                    }
                </div>

                <div id="arrow_buttons">
                    <div className={currentIndex >= (numberOfSlideFrame) ? "disable-arrow-button arrow-button" : "arrow-button" } onClick={ nextReview }>

                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 24 24" fill="none" stroke="#0048d9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                            <polyline points="12 5 19 12 12 19"/>
                        </svg>

                    </div>
                    <div className={currentIndex <= 0 ? "disable-arrow-button arrow-button" : "arrow-button" } onClick={previousReview }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 24 24" fill="none" stroke="#0048d9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"/>
                            <polyline points="12 19 5 12 12 5"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    ) ;
}

export default Reviews ;