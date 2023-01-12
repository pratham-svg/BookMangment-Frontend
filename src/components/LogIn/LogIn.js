import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [User, setUser] = useState({ email: "", password: "" });
  const ChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...User, [name]: value });
  };
  const TokenCreater = async (e) => {
    e.preventDefault();
    try {
      const token = await axios.post("/login", {
        email: User.email,
        password: User.password,
      });
      localStorage.setItem("token", token.data.data);
      window.alert("successfull logIn");
    } catch (err) {
      window.alert("error");
    }
  };
  return (
    <div className="col-4 " style={{marginLeft : "30%" ,marginTop : "2%" }}>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            value={User.email}
            onChange={ChangeHandler}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={User.password}
            onChange={ChangeHandler}
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={TokenCreater}
        >
          <Link className="btn btn-primary" to="/">
            {" "}
            Submit
          </Link>
        </button>
      </form>
    </div>
  );
};

export default LogIn;
