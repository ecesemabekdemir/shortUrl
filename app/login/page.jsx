import Nav from "@/component/nav";
import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="loginContainer">
      <div>
        <div className="loginHeader">
          <img src="./img/Shortly.svg" alt="" />
        </div>
      </div>
      <div className="loginPage">
        <img src="./img/loginPage.png" alt="" />
        <div className="text">
          <h1>Welcome</h1>
          <p>Don’t have a account</p>
        </div>
        <form>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
          <div className="buttons">
            <button formAction={login}>Log in</button>
            <button formAction={signup}>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
