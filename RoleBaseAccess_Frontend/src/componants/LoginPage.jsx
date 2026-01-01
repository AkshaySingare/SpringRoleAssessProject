import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import service from "../service/Service";

function LoginPage() {
  const [role, setRole] = useState("USER");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const [msg,setMsg] = useState();
  // Login
  let navigate = useNavigate();
  const handleLogin = () => {
    const loginData = {
      id:0,
      role: role,
      email: email,
      password: password,
    };

    service.login(loginData).then((res)=>{
      console.log(res);
      if(res.status == 200){
        localStorage.setItem("email",res.data.email);
        localStorage.setItem("password",res.data.password);
        localStorage.setItem("role",res.data.role);
         navigate("/navbar");
        }
    }).catch((err)=>{
      console.log(err);
      setMsg("Enter Vallid Creditials...");
      setTimeout(()=>setMsg(),3000);
    })
    console.log("Login Data:", loginData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="text-center mb-4">Login</h4>

              {/* Role Select */}
              <div className="mb-3">
                <label className="form-label">Login as</label>
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

                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
            </div>
              <div className="fs-5 ps-5 bg-warning text-danger">{msg}</div>
          </div>
          <div>
            <NavLink to="/signUpPage">SignUp</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
