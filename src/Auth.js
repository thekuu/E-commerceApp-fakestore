import React, { useState } from "react";
import mockAuth from "./mockAuth";

const Auth = ({ setUser, setShowAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await mockAuth.signInWithEmailAndPassword(email, password);
        setUser(mockAuth.currentUser);
        setShowAuth(false); // Close the Auth component after login
        alert("Logged in successfully!");
      } else {
        await mockAuth.createUserWithEmailAndPassword(email, password);
        setUser(mockAuth.currentUser);
        setShowAuth(false); // Close the Auth component after signup
        alert("Signed up successfully!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleAuth}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="button-container">
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Need an account? Sign Up"
              : "Already have an account? Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
