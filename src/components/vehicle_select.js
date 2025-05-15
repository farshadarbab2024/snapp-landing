import '../scss/vehicle_select.scss' ;
import React, { useState } from "react" ;

function VehicleSelect(){
    const [activeVehicle, setActiveVehicle] = useState("car") ; //special the selected vehicle

    const vehicleBelowLinePosition = { //special vehicle with a line below that
        car: "vehicle_below_line_car_position",
        motorcycle: "vehicle_below_line_motorcycle_position" ,
        truck: "vehicle_below_line_truck_position"
    }

    const vehicles = {
        car: {
            name: "سواری",
            image: "/images/car.webp", 
            alt: "سواری", 
        }, 
        motorcycle: {
            name: "موتور", 
            image: "/images/motorcycle.webp", 
            alt: "پیک موتوری"
        }, 
        truck: {
            name: "وانت", 
            image: "/images/truck.webp",
            alt: "وانت"
        }
    } ;

    return(
        <section className="white_section margin-top8">
            <h2 className="title text-center bold900">مدارک لازم برای ثبت‌نام</h2>
            <span className="text-font text-center margin-top2">با انتخاب هر وسیله نقلیه می‌توانید مدارک لازم برای ثبت‌نام آن وسیله را ببینید.</span>
        
        
            <div id="vehicle_select">
                <div id="vehicle_select_top">
                    <div className={activeVehicle==="car" ? "vehicle_div active_vehicle_div" : "vehicle_div"} onClick={() => setActiveVehicle("car")}>
                        <img src={vehicles["car"]["image"]} className="vehicle_img" alt={vehicles["car"]["alt"]} />
                        <span className="text-font vehicle_name">{ vehicles["car"]["name"] }</span>
                    </div>
                    <div className={activeVehicle==="motorcycle" ? "vehicle_div active_vehicle_div" : "vehicle_div"} onClick={() => setActiveVehicle("motorcycle")}>
                        <img src={vehicles["motorcycle"]["image"]} className="vehicle_img" alt={vehicles["motorcyc"]} />
                        <span className="text-font vehicle_name">موتور</span>
                    </div>
                    <div className={activeVehicle==="truck" ? "vehicle_div active_vehicle_div" : "vehicle_div"} onClick={() => setActiveVehicle("truck")}>
                        <img src="/images/truck.webp" className="vehicle_img" alt="وانت بار" />
                        <span className="text-font vehicle_name">وانت</span>
                    </div>
                </div>

                <div id="vehicles_register_documents"> {/* showing needed documents for every vehicle */}
                    <div id="vehicle_below_line" className={vehicleBelowLinePosition[activeVehicle] || ""}></div> {/* specify selected vehicle */}
                    
                    {activeVehicle === "car" && (
                        <div>
                            <h3 class="title2">مدارک لازم برای ثبت‌نام سواری</h3>
                            <ul className="documents_ul margin-top2">
                                <li>عکس گواهینامه (پشت و رو)</li>
                                <li>عکس کارت خودرو (پشت و رو)</li>
                                <li>عکس بیمه‌نامه شخص ثالث یا کد یکتای بیمه</li>
                            </ul>
                        </div>
                    )}

                    {activeVehicle === "motorcycle" && (
                        <div>
                            <h3 class="title2">مدارک لازم برای ثبت‌نام پیک موتوری</h3>
                            <ul className="documents_ul">
                                <li>عکس کارت ملی یا گواهینامه</li>
                                <li>عکس کارت موتور</li>
                            </ul>

                            <span class="title2 margin-top2 display-block">توجه کنید: </span>
                            <ul className="documents_ul">
                                <li>اگر عکس گواهینامه‌تان را ندارید، می‌توانید عکس کارت ملی هوشمند یا شناسنامه جدید‌تان را بارگذاری کنید تا در صورت صحت سنجی، سرویس اسنپ‌باکس برای‌تان فعال شود.</li>
                                <li>اگر می‌خواهید با موتورتان هم مرسوله و هم مسافر جابه‌جا کنید، لازم است تصویر بیمه نامه و گواهینامه موتورتان را بارگذاری کنید.</li>
                            </ul>
                        </div>
                    )}

                    {activeVehicle === "truck" && (
                        <div>
                            <h3 class="title2">مدارک لازم برای ثبت‌نام وانت</h3>
                            <ul className="documents_ul">
                                <li>عکس گواهینامه: <br />
                                    پایه 3 برای وانت با ظرفیت 3,500 کیلومتر <br />
                                    پایه 2 برای وانت با ظرفیت 3,800 کیلو به بالا <br />
                                </li>
                                <li>عکس کارت خودرو</li>
                                <li>عکس بیمه‌نامه شخص ثالث یا کد یکتای بیمه</li>
                            </ul>

                            <span class="title2 margin-top2 display-block">وانت لازم است این ویژگی‌ها را داشته باشد: </span>

                            <ul className="documents_ul">
                                <li>ظرفیت آن بالای 1,360 کیلو باشد</li>
                                <li>وانت حمل شیشه (خرک‌دار) نباشد.</li>
                            </ul>
                        </div>
                    )}
                </div>
                
            </div>
        </section>
    ) ;
}

export default VehicleSelect ;