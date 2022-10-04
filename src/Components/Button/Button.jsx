import React from "react";
import "../Button/button.style.scss";

const Button = ({children, primary , ...rest}) =>{
    return(
        <button className={`btn_buy ${primary ? "primary" : ""}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;