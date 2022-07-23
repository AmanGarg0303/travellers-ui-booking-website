import "./login.css";

const Login = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="lName">Login to Travellers</div>
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="lInput"
        />
        <button onClick={handleClick} className="lButton">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
