import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../appwriteconfig";
import { Client, Account } from "appwrite";

function Login() {
  // Apprite config
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("656af734352918d1a3cd");
  const account = new Account(client);

  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  //   const { login } = useAuth;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Try login: " + user.email + " " + user.password);
      //   await login(user.email, user.password);
      let response = await account.createEmailSession(
        user.email,
        user.password
      );
      let accountDetail = await account.get();
      setCurrentUser(accountDetail);
      console.log(
        "Cuurent user " + accountDetail.$id + " " + accountDetail.email
      );
      navigate("/pesanan");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-white h-screen flex justify-center items-center">
      <div className="bg-secondary-blue border border-blue-500 rounded-md p-20 shadow-md relative">
        <h1 className="text-4xl font-bold text-center mb-6">Masuk Akun</h1>
        <form onSubmit={handleSubmit}>
          <div className="relative my-4">
            <label htmlFor="">Username</label>
            <input
              type="text"
              className="block rounded-xl w-72 py-2.5 px-0 text-sm text-black border-0 border-b-2 focus:outline-none focus:border-blue-gray-500 focus:ring-blue-gray-500 focus:ring-1 peer"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="relative my-4">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="block rounded-xl w-72 py-2.5 px-0 text-sm text-black border-0 border-b-2 focus:outline-none focus:border-blue-gray-500 focus:ring-blue-gray-500 focus:ring-1 peer"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full pb-2 pt-2 place-content-center rounded-xl font-bold bg-primary-blue"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
