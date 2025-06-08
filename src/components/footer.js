import "../scss/footer.scss" ;

function Footer(){
    return(
        <footer>
            <p className="footer_text">ساخته شده توسط فرشاد ارباب</p>
            <img id="farshad_arbab_picture" src={process.env.PUBLIC_URL + "/images/farshad-arbab-profile-picture.jpeg"} alt="تصویر پروفایل فرشاد ارباب" />
        </footer>
    ) ; 
}

export default Footer ;