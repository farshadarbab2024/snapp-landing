import '../scss/FAQ.scss' ;
import React, {useState} from "react" ;

function FAQ(){
    const [openQuestion, setOpenQuestion] = useState(null) ; //all questions are closed. 
    
    const handleClickingQuestion = (questionId) => {
        if(openQuestion === questionId){
            setOpenQuestion(null) ;
        }else{
            setOpenQuestion(questionId) ;
        }
    }

    const questions = [
        {
            question: "چند نفر میتوانند با یک ماشین در اسنپ رانندگان ثبت‌نام کنند؟", 
            answer: "حداکثر ۳ نفر می‌توانند با یک ماشین در اسنپ رانندگان ثبت‌نام و فعالیت کنند."
        },
        {
            question: "چند روز بعد از ثبت‌نام حسابم فعال می‌شود؟", 
            answer: "بین یک تا ۳ روز شما را با پیامک از وضعیت ثبت‌نامتان باخبر می‌‌کنیم."
        },
        {
            question: "حداقل سن برای ثبت‌نام در اسنپ رانندگان چقدر است؟", 
            answer: "برای ثبت‌نام در اسنپ‌ رانندگان لازم است حداقل ۱۸ سال داشته باشید."
        }, 
        {
            question: "گواهی عدم سوءپیشینه برای ثبت‌نام در اسنپ رانندگان لازم است؟", 
            answer: "بعد از ثبت‌نام، تیم امنیت اسنپ برای اطمینان از عدم سوءپیشینه استعلام آن را از پلیس می‌گیرد."
        },
        {
            question: "آیا با هر مدل خودرویی می‌توانم در اسنپ رانندگان ثبت‌نام کنم؟",
            answer: "متاسفانه مدل خودرو پیکان در اسنپ رانندگان امکان ثبت نام ندارد."
        },
        {
            question: "آیا ثبت نام در اسنپ محدودیت جنسی دارد؟", 
            answer: "خیر. تمام خانم ها و آقایان با حداقل 18 و حداکثر 70 سال سن میتوانند در اسنپ ثبت نام کنند." 
        }
    ] ;
    return(
        <section className="white_section" id="FAQ_container">
            <h2 className="title text-center margin-top8">پرسش‌های پرتکرار</h2>

            <div className="margin-top8">
                {
                    questions.map((question, index) => {
                        return(
                            <div className="question_div">
                                <div className="question" onClick={() => handleClickingQuestion(index)}>
                                    <p className="question_p">{question["question"]}</p>

                                    <div className={openQuestion === index ? "up_icon_div icon_div" : "icon_div"}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" id="FAQ_arrow_icon">
                                            <path d="M2 5l6 6 6-6" />
                                        </svg>

                                    </div>
                                </div>
                
                                <div className={openQuestion === index ? "answer answer-opened" : "answer answer-closed"}>
                                    <p className={openQuestion === index ? "answer-p answer-p-show" : "answer-p answer-p-hidden"}>{question["answer"]}</p>
                                </div>

                            </div>
                        ) ;
                    })
                }
            </div>
        </section>
    ) ;
}

export default FAQ ;