import React from "react";
import "../footer/footer.style.scss";
import electronic from "../../../assets/images/electronic.jfif";
import national from "../../../assets/images/national.jpg";


const Footer = ()=>{
    return(
        <footer className="footer">
            <h2>ی متن گنده با اشاره به ارتباط با ما </h2>
            <div className="footer__content">
                <div className="footer__column">
                    <p className="address">آدرس یا اطلاعات در مورد فروشگاه  که<br></br> بهتره سه یا چهار خط باشه با فونت ریز<br></br> چون کاربر که نمی خواد حتما اینو بخونه</p>
                    <p className="phone">0912-123-45-67</p>
                    <p className="email">test@gmail.com</p>
                </div>
                <div className="footer__column">
                    <p className="facebook">test@gmail.com</p>
                    <p className="instagram">test@gmail.com</p>
                    <p className="telegram">test@gmail.com</p>
                </div>
                <div className="footer__column">
                    <img  className="footer__image" src={electronic} alt=""></img>
                    <img  className="footer__image" src={national} alt=""></img>
                </div>
            </div>
            
        
        </footer>
    )
}

export default Footer;