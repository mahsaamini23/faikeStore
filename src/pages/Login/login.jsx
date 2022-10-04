import React from "react";
import "./login.style.scss";

const Login = () => {
    return(
        <div className="container__login">
            <form className="form__login">
                <div className="userName">
                    <label >{"نام کاربری :"} </label>
                    <input type="text" name="userName"/>
                </div>
                <div className="passWord">
                    <label >{"رمز عبور :"}</label>
                    <input type="text" name="passWord"/>
                </div>
                <button  className="btn_login" type="button">Login</button>
            </form>
        </div>
    )
}

export default Login;