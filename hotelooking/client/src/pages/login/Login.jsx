import "./login.css";

const Login = () => {
  const handleClick = () => {
    return "You are successfully reserved your room!";
  };

  return (
    <div className="login">
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
