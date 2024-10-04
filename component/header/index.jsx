import Nav from "../nav";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="./img/Shortly.svg" alt="" />
          <Nav />
        </div>
        <div className="login">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
}
