import { useState, useEffect } from "react";
import "./App.css";

// import Functions and Components
import SigninValidator from "./functions/SigninValidator";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handelSubmit = (event) => {
    event.preventDefault();
    setErrors(SigninValidator(username, password));
    setIsSubmitting(true);
  };

  useEffect(() => {
    //Check if there is no error and then call th callback()
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submit();
    }
    // eslint-disable-next-line
  }, [errors, isSubmitting]);

  function submit() {
    alert("فرم ارسال شد!");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4 Sign-in-Form">
          <h1 className="text-center login-title">پنل ورود کاربران</h1>
          <div className="account-wall">
            <i className="fa fa-user-circle profile-img" aria-hidden="true"></i>
            <form className="form-signin" onSubmit={handelSubmit} noValidate>
              {errors.username ? (
                <input
                  type="text"
                  name="username"
                  className="form-control error"
                  value={username}
                  placeholder={errors.username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              ) : (
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="آدرس ایمیل"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  autoFocus
                />
              )}

              {errors.password ? (
                <input
                  type="password"
                  name="password"
                  className="form-control error"
                  value={password}
                  placeholder={errors.password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              ) : (
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="رمز عبور"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              )}
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                ورود
              </button>
              <br />
              <label
                className="checkbox pull-left"
                style={{ marginTop: "10px" }}
              >
                <input
                  type="checkbox"
                  value="remember-me"
                  style={{ marginLeft: "5px" }}
                />
                مرا به خاطر بسپار
              </label>
              <span className="clearfix"></span>
            </form>
          </div>
          <a href="#" className="text-center new-account">
            ساخت حساب کاربری{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
