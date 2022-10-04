import React from "react";
import "../Card/card.style.scss";
import Button from "../../Components/Button/Button";
import image from "../../assets/images/newest.jpg";

const Card =({ name , price , onclick })=>{
    return(
        <div className="card">
            <img className="card__image" src={image} width="100px" height="100px" alt=""></img>
            <h2 className="card__title">{name}</h2>
            <p className="card__price">{`${price} تومان `}</p>
            <div className="card__btn">
                <Button onClick={onclick}>{"خرید"}</Button>
            </div>
        </div>
    )
}

export default Card;