import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Register() {
  const { user, registerUser } = useAuth();

  const [input, setinput] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/admin/pesanan");
    }
  });

  //   const handleChange = (e) => {
  //     setinput({ ...input, [e.target.name]: e.target.value });
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = input.email;
    const password = input.password;
    const name = input.name;

    const userInfo = { email, password, name };

    await registerUser(userInfo);
  };

  return (
    <div className="bg-bg text-white h-screen flex justify-center items-center">
      <div className="bg-secondary-blue border border-blue-500 rounded-md p-20 shadow-md relative">
        <h1 className="text-4xl font-bold text-center mb-6">Daftar Akun</h1>
        <form onSubmit={handleSubmit}>
          <div className="relative my-4">
            <label htmlFor="nama">Nama</label>
            <input
              id="nama"
              type="text"
              className="block rounded-xl w-72 py-2.5 px-3 text-sm text-black border-0 border-b-2 focus:outline-none focus:border-blue-gray-500 focus:ring-blue-gray-500 focus:ring-1 peer"
              value={input.nama}
              onChange={(e) => setinput({ ...input, name: e.target.value })}
              pattern=".{3,}"
              required
            />
          </div>
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
              onChange={(e) => setinput({ ...input, password: e.target.value })}
              pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}"
              title="minimal 8 karakter, kombinasi huruf dan angka"
            />
          </div>
          <button
            type="submit"
            className="w-full pb-2 pt-2 place-content-center rounded-xl font-bold bg-primary-blue"
          >
            Register
          </button>
        </form>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 mt-2 font-normal font-inter text-sm"
        >
          Sudah punya akun?{" "}
          <Link to={"/login"} className="Flex items-center underline">
            Login
          </Link>
        </Typography>
      </div>
    </div>
  );
}

export default Register;
