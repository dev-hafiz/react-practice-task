/* eslint-disable react/jsx-no-duplicate-props */
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loginImg from "../assets/LoginImg.png";
import googleBtn from "../assets/google.png";

const Registration = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser, user, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
    }

    // console.log(email, password, confirm_password);

    if (password === confirm_password) {
      createUser(email, password);
      if (user) {
        navigate(from);
      }
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center ml-6  lg:w-2/4">
          <div className="login-container">
            <div className="image-container">
              <img
                src={loginImg}
                className="image animated"
                alt="login image"
              />
            </div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </div>

        <div className="card shrink-0 w-full max-w-sm ">
          <h3 className="login-title mt-3">WELCOME BACK!</h3>
          <p className="login-sub-title">
            Already have an account?{" "}
            <span className="toggle-text">
              <Link to="/login">Login</Link>
            </span>
          </p>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="label">
                  <span className="lebel-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="input-box"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="label">
                  <span className="lebel-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  className="input-box"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="label">
                  <span className="lebel-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="enter your password"
                  className="input-box"
                  required
                />
              </div>

              <input className="submit-btn" type="submit" value="Register" />
            </form>
          </div>
          <div className="text-center">
            <p className="line-design ">or continue with</p>
          </div>

          <div>
            <button onClick={googleLogin} className="social-btn">
              <img src={googleBtn} alt="google login button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
