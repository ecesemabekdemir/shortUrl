import { login, signup } from "./actions";

import "./login.css";

export default function LoginPage() {
  return (
    <div className="loginContainer">
      <div>
        <div className="loginHeader">
          <img src="./img/Shortly.svg" alt="" />
        </div>
      </div>
      <div className="loginPage">
        <form className="loginPageForm">
          <img className="loginPageImg" src="./img/loginPage.png" alt="" />
          <div className="text">
            <h1>Welcome</h1>
            <p>Don’t have a account ?</p>
          </div>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="enter your email address "
          />

          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="*********"
          />
          <div className="buttons">
            <button formAction={login}>Log in</button>
            <button formAction={signup}>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
