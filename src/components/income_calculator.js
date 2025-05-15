import "../scss/income_calculator.scss" ;
import React, { useState, useEffect } from "react" ;

function IncomeCalculator(){
    const [workTime, setWorkTime] = useState(8) ; 

    const [vehicle, setVehicle] = useState("car") ;

    const [city, setCity] = useState("Tehran") ; 

    const incomesInHour = {
        Tehran:{motorcycle: 5340000,car: 5400000},
        Karag:{motorcycle: 2430000,car: 4200000},
        Mashhad:{motorcycle: 2730000, car: 3600000},
        Shiraz:{motorcycle: 2790000,car: 3900000},
        Tabriz:{motorcycle: 3630000,car: 3300000},
        Esfahan:{motorcycle: 5040000,car: 3900000}
    } ;

    let [income, setIncome] = useState((incomesInHour["Tehran"]["car"] * 8).toLocaleString()) ;

    useEffect(() => {
        const incomeInHour = incomesInHour[city][vehicle] ;
        setIncome((incomeInHour * workTime).toLocaleString()) ;
    }, [city, vehicle, workTime])


    return(
        <section id="section3">
            <div id="income_calculate_text_div">
                <h2 id="income_title">ماشین حساب درآمد</h2>
                <span id="income_short_text">ساعت کاری، شهر و وسیله نقلیه‌تان را انتخاب کنید، درآمد حدودی ماهانه‌تان را حساب کنید.</span>
            </div>
            <div id="income_calculator">
                <div id="income_value_div">
                    <span id="income_value">{income}</span>
                    <img src="images/tomen.png" alt="تومان" id="tomen_img" />
                </div>
                <span className="fixed-text-font margin-top3 display-block">روزی چند ساعت می‌خواهید کار کنید؟</span>
                <div id="work_time_circles">
                    <div className={workTime==4 ? "selected-work-time-circle work-time-circle" : "work-time-circle"} onClick={() => setWorkTime(4)}>۴</div>
                    <div className={workTime==6 ? "selected-work-time-circle work-time-circle" : "work-time-circle"} onClick={() => setWorkTime(6)}>۶</div>
                    <div className={workTime==8 ? "selected-work-time-circle work-time-circle" : "work-time-circle"} onClick={() => setWorkTime(8)}>۸</div>
                    <div className={workTime==12 ? "selected-work-time-circle work-time-circle" : "work-time-circle"} onClick={() => setWorkTime(12)}>۱۲</div>
                </div>
                <span className="margin-top4 display-block fixed-text-font">با چه وسیله نقلیه‌ای و در کدام شهر می‌خواهید فعالیت کنید؟</span>
                <div id="income_calculate_select_vehicle_city">
                    <div className="income_calculate_select_div">
                        <label className="fixed-small-font income_calculate_label" htmlFor="income_calculate_city_select">شهر</label>
                        <select className="income_calculate_select_tag" id="income_calculate_city_select" value={city} onChange={(e) => setCity(e.target.value)}>
                            <option value="Tehran">تهران</option>
                            <option value="Karag">کرج</option>
                            <option value="Mashhad">مشهد</option>
                            <option value="Shiraz">شیراز</option>
                            <option value="Tabriz">تبریز</option>
                            <option value="Esfahan">اصفهان</option>
                        </select>
                    </div>

                    <div className="income_calculate_select_div">
                        <label htmlFor="income_calculate_vehicle_select" className="fixed-small-font income_calculate_label">وسیله نقلیه</label>
                        <select className="income_calculate_select_tag" id="income_calculate_vehicle_select" value={vehicle} onChange={(e) => setVehicle(e.target.value)} >
                            <option value="car">سواری</option>
                            <option value="motorcycle">موتور</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    ) ;
}

export default IncomeCalculator ;