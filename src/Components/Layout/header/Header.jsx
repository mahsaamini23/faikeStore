import React from "react";
import "./header.style.scss";
import best from "../../../assets/images/best.jpg";
import newest from "../../../assets/images/newest.jpg";
import popular from "../../../assets/images/popular.jpg";


const Header =()=>{
    return(
        <header className="header">
            <div className="description">
                <div className="box-header">
                    <h2>معرفی سایت با جملات شعاری و تقریبا  در سه خط و چهار خط  بر اساس سایز</h2>
                </div>
                <p>مطلبی در مورد سیاست های سایت یا تبلیِغات یا <br></br>جمله ای با دو هدف بالا </p>
                <div className="box_link">
                    <a href="/">دسته بندی محصولات</a>
                </div>
            </div>
            <div className="container_images">
                <img className="image1" src={best} alt="best"/>
                <img className="image2" src={newest} alt="newest"/>
                <img className="image3" src={popular} alt="popular"/>
            </div>
        </header>
    )
}

export default Header;