import React, { useState } from "react";

//style
import style from "./auth.module.css";

function Form() {
  const initCredentials: Object = {
    email: "",
    password: ""
  };

  const [credentials, setCredentials] = useState(initCredentials);
  //destructuring
  const { email, password } = credentials;

  function handleInput(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  console.log(credentials);

  return (
    <div className={style.formContainer}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.inputGroup}>
          <img src="/images/input-icon.png" alt="field icon" />
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleInput}
          />
        </div>
        <div className={style.inputGroup}>
          <img src="/images/lock.png" alt="field icon" />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleInput}
          />
        </div>

        <div className={`${style.inputGroup} dflex space-between`}>
          <div className="dflex">
            <input id="remember" type="checkbox" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={style.linkBtn}
              href="https://calendar.softvision.ro/change-password"
            >
              Forgot password
            </a>
          </div>
        </div>
        <div className={style.formBtnContainer}>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
