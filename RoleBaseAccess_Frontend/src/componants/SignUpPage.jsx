import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import service from "../service/Service";

function SignUpPage() {
  const [role, setRole] = useState("USER");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const handleSignup = () => {

    const signupData = {
      id:0,
      role: role,
      name: name,
      email: email,
      password: password,
    };

    service.signUp(signupData).then((res) => {
      console.log(res);
       localStorage.setItem("email",res.data.email);
        localStorage.setItem("password",res.data.password);
        localStorage.setItem("role",res.data.role);
      navigate("/navbar");
    }).catch((err) => {
      console.log(err);
    });;



  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="text-center mb-4">Sign Up</h4>

              {/* Role Select */}
              <div className="mb-3">
                <label className="form-label">Register as</label>
                <select
                  className="form-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>

              <form>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">
                    {role === "ADMIN" ? "Admin Name" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Confirm Password (UI only) */}
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-success w-100"
                  onClick={handleSignup}
                >
                  Sign Up
                </button>
              </form>
              <div className="mt-2">
                <NavLink to="/">Login</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
