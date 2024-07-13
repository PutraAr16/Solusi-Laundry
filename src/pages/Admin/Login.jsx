import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import { Typography, Alert } from "@material-tailwind/react";
import { Link } from "react-router-dom";
function Login() {
  const { user, loginUser, openAlert } = useAuth();

  const [input, setinput] = useState({ email: "", password: "" });

  const [countLogin, setCountLogin] = useState(
    localStorage.getItem("countLogin") || 0
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setCountLogin(0);
      localStorage.setItem("countLogin", 0);
      navigate("/admin/pesanan");
    }
    if (countLogin >= 1111) {
      if (window.confirm("Login lebih 3, Ingin register akun?")) {
        localStorage.setItem("countLogin", 0);
        navigate("/register");
      }
    }
  }, [user, countLogin]);

  //   const handleChange = (e) => {
  //     setinput({ ...input, [e.target.name]: e.target.value });
  //   };
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function addLoginAttemp() {
    console.log("count submit bef: " + countLogin);
    const nextCount = countLogin + 1;
    setCountLogin((nextCount) => nextCount + 1);
    localStorage.setItem("countLogin", countLogin + 1);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = input.email;
    const password = input.password;

    const userInfo = { email, password };
    addLoginAttemp();
    loginUser(userInfo);
    console.log("count submit: " + countLogin);
  };

  return (
    <div>
      <Alert
        open={openAlert}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
      >
        Login Gagal, Mohon cek email dan password
      </Alert>
      <div className="bg-bg text-white h-screen flex justify-center items-center">
        <div className="bg-secondary-blue border border-blue-500 rounded-md p-20 shadow-md relative">
          <h1 className="text-4xl font-bold text-center mb-6">Masuk Akun</h1>
          <form onSubmit={handleSubmit}>
            <div className="relative my-4">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="block rounded-xl w-72 py-2.5 px-3 text-sm text-black border-0 border-b-2 focus:outline-none focus:border-blue-gray-500 focus:ring-blue-gray-500 focus:ring-1 peer"
                value={input.email}
                onChange={(e) => setinput({ ...input, email: e.target.value })}
              />
            </div>
            <div className="relative my-4">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="block rounded-xl w-72 py-2.5 px-3 text-sm text-black border-0 border-b-2 focus:outline-none focus:border-blue-gray-500 focus:ring-blue-gray-500 focus:ring-1 peer"
                value={input.password}
                onChange={(e) =>
                  setinput({ ...input, password: e.target.value })
                }
                pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,16}"
                title="minimal 8 dan maksimal 16 karakter, kombinasi huruf dan angka"
              />
            </div>
            <button
              type="submit"
              className="w-full pb-2 pt-2 place-content-center rounded-xl font-bold bg-primary-blue"
            >
              Masuk
            </button>
          </form>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 mt-2 font-normal font-inter text-sm"
          >
            Belum punya akun?{" "}
            <Link to={"/register"} className="Flex items-center underline">
              Daftar
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Login;
