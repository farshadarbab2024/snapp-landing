import "../scss/features.scss" ;

function Features(){
    const features = [
        {
            title: "مدیریت درآمد", 
            img: process.env.PUBLIC_URL + "/images/money.webp" ,
            alt: "درآمد", 
            description: "با رانندگی در مسیرهای دلخواه و اوقات آزاد خود، درآمد بیشتری داشته باشید."
        }, 
        {
            title: "انواع طرح‌های تشویقی", 
            img: process.env.PUBLIC_URL + "/images/gift.webp", 
            alt: "طرح های تشویقی", 
            description: "با رانندگی در اسنپ از طرح‌های تشویقی متنوع، پاداش‌ها و جوایز دوره‌ای برخوردار شوید."
        },
        {
            title: "رئیس خودتان باشید", 
            img: process.env.PUBLIC_URL + "/images/clock.webp", 
            alt: "مدیریت زمان", 
            description: "در هر ساعت از شبانه‌روز و در هر مسیری که دوست دارید، پشت فرمان بنشینید و درآمدزایی کنید."
        }
    ]
    return(
        <section id="features_section">
            <h2 className="title text-center margin-top8">مزایای اسنپ رانندگان</h2>
            <span id="features_short_text">در اسنپ با هر وسیله نقلیه‌ای که دارید می توانید فعالیت کنید.</span>

            <div id="features_container">

                {
                    features.map((feature,index) => {
                        return(
                            <div key={feature['title']} className="feature_div" >
                                <div className="feature_div_top">
                                    <img src={feature["img"]} className="feature_img" alt={feature["alt"]} />
                                    <h3 className="feature_title">{feature["title"]}</h3>
                                </div>
                
                                <p className="feature-description">{feature['description']}</p>
                            </div>
                        ) ;
                    }) 
                }
            </div>
        </section>
    ) ; 
}

export default Features ;