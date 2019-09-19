import React from "react";

//style
import style from "./auth.module.css";

//Components
import Title from "./Title";
import Logo from "./Logo";
import ProfileImg from "./ProfileImg";
import Form from "./Form";

const Login = () => {
  return (
    <div className="container">
      <div className={style.login}>
        <Title />
        <Logo />
        <ProfileImg />
        <Form />
      </div>
    </div>
  );
};

export default Login;
