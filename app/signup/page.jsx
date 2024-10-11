import { signUp } from "@/actions/auth";

import "./signup.css";

export default function SignUPPage() {
  return (
    <div className="signupContainer">
      <div>
        <div className="loginHeader">
          <img src="./img/Shortly.svg" alt="" />
        </div>
      </div>
      <form className="signupForm" action={signUp}>
        <img className="loginPageImg" src="./img/loginPage.png" alt="" />
        <div className="text">
          <h1>Welcome</h1>
          <p>Don’t have a account ?</p>
        </div>
        <input type="text" name="firstName" placeholder="enter your name" />{" "}
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="enter your lastname"
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          placeholder="enter your email address"
        />{" "}
        <br />
        <input type="password" name="password" placeholder="********" />
        <button>Sign up</button>
      </form>
    </div>
  );
}
