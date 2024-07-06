import React, { useState, useEffect, useContext, useRef } from "react";

import { AuthContext } from "../../contexts/authContext";

const Login = ({ setCurrentUser }) => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState("");
  const [showSignIn, setShowSignIn] = useState(false);
  const { users, setUsers } = useContext(AuthContext);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  useEffect(() => {
    const storageUsers = JSON.parse(localStorage.getItem("users")) ?? [];
    setUsers(storageUsers);
  }, []);
  const handleSignUp = () => {
    console.log(email.current.value);
    if (!validateEmail(email.current.value) || password.current.value < 6) {
      setError("يجب إدخال ايميل صحيح وكلمه مرور قويه");
      return;
    } else {
      setError(null);
    }
    if (name.current.value && email.current.value && password.current.value) {
      const user = {
        id: Date.now(),
        email: email.current.value,
        name: name.current.value,
        pass: password.current.value,
        todos: [],
      };

      const updatedUser = [...users, user];

      setUsers(updatedUser);

      localStorage.setItem("users", JSON.stringify(updatedUser));
      // alert("Account created successfully!!");
      window.location.reload();
    } else {
      alert("Sorry!!");
    }
  };

  const handleLogin = () => {
    const currentUser = users.find(
      (user) =>
        user.email === email.current.value &&
        user.pass === password.current.value
    );

    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      setCurrentUser(currentUser);
      setError(null);
    } else {
      setError("الايميل او كلمه المرور غير صحيحه");
    }
  };

  return (
    <div>
      {!showSignIn ? (
        <div className="login__container">
          <h3 className="login_title">اهلاً بك في مدير المهام</h3>
          <div className="input_space">
            <input placeholder="الايميل" type="email" ref={email} />
            <input placeholder="كلمة المرور" type="password" ref={password} />
          </div>
          <button className="login_btn" onClick={handleLogin}>
            دخول
          </button>
          {error ? <div className="error">{error}</div> : ""}
          <span onClick={() => setShowSignIn(true)}>إنشاء حساب</span>
        </div>
      ) : (
        <div className="login__container">
          <h3 className="login_title">اهلاً بك في مدير المهام</h3>
          <div className="input_space">
            <input placeholder="الاسم" type="text" ref={name} />
            <input placeholder="الايميل" type="email" ref={email} />
            <input placeholder="كلمة المرور" type="password" ref={password} />
          </div>
          <button className="login_btn" onClick={handleSignUp}>
            تسجيل
          </button>
          {error ? <div className="error">{error}</div> : ""}
          <span onClick={() => setShowSignIn(false)}>لدي حساب</span>
        </div>
      )}
    </div>
  );
};

export default Login;
