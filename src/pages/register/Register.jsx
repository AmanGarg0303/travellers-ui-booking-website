import "./register.css";

const Register = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <div className="rName">Register on Travellers</div>
      <div className="rContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="rInput"
        />
        <input type="email" placeholder="email" id="email" className="rInput" />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="rInput"
        />
        <button onClick={handleClick} className="rButton">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
