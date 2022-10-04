import React from "react";
import "../CardList/cardList.style.scss";
import { Link } from "react-router-dom";


const CardList = ({children, title, href}) => {
    return(
        <div className="card_list">
            <div className="cardList__header">
                <h2>{title}</h2>
                <Link to={href}>مشاهده ی همه </Link>
            </div>
            <div className="cardList__content">
                {children}
            </div>
            
        </div>
    )
}

export default CardList;