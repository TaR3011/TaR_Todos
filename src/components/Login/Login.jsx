import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import { AuthContext } from "../../contexts/authContext";
import App from "../../App.jsx";

const Login = ({ setCurrentUser }) => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showSignIn, setShowSignIn] = useState(false);
  const { users, setUsers } = useContext(AuthContext);

  useEffect(() => {
    const storageUsers = JSON.parse(localStorage.getItem("users")) ?? [];
    setUsers(storageUsers);

    // if (localSignUp) {
    //   setShowHome(true);
    // }
    // if (localEmail) {
    //   setShow(true);
    // }
  }, []);
  const handleSignUp = () => {
    if (name.current.value && email.current.value && password.current.value) {
      const user = {
        id: Date.now(),
        email: email.current.value,
        name: name.current.value,
        pass: password.current.value,
        isLoggedIn: false,
        todos: [],
      };

      const updatedUser = [...users, user];

      setUsers(updatedUser);

      localStorage.setItem("users", JSON.stringify(updatedUser));
      alert("Account created successfully!!");
      // window.location.reload();
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
    }
    const updatedUser = users.map((u) => {
      if (
        email.current.value === u.email &&
        password.current.value === u.pass
      ) {
        return { ...u, isLoggedIn: true };
      } else {
        return { ...u, isLoggedIn: false };
        // return u;
      }
    });

    setUsers(updatedUser);
    localStorage.setItem("users", JSON.stringify(updatedUser));
  };

  return (
    <div>
      {!showSignIn ? (
        <div className="login__container">
          <h3 className="login_title">اهلاً بك في مدير المهام</h3>
          <div className="input_space">
            <input placeholder="الايميل" type="text" ref={email} />
            <input placeholder="كلمة المرور" type="password" ref={password} />
          </div>
          <button className="login_btn" onClick={handleLogin}>
            دخول
          </button>
          <span onClick={() => setShowSignIn(true)}>إنشاء حساب</span>
        </div>
      ) : (
        <div className="login__container">
          <h3 className="login_title">اهلاً بك في مدير المهام</h3>
          <div className="input_space">
            <input placeholder="الاسم" type="text" ref={name} />
            <input placeholder="الايميل" type="text" ref={email} />
            <input placeholder="كلمة المرور" type="password" ref={password} />
          </div>
          <button className="login_btn" onClick={handleSignUp}>
            تسجيل
          </button>
          <span onClick={() => setShowSignIn(false)}>لدي حساب</span>
        </div>
      )}
    </div>
  );
};

export default Login;
