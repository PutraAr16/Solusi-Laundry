import { createContext, useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";
import { account } from "../appwriteconfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    //setLoading(false)
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      let respon = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      setUser(accountDetails);
      setOpenAlert(false);
    } catch (error) {
      console.error(error);
      setOpenAlert(true);
    }
    setLoading(false);
  };

  const logoutUser = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.name
      );
      await account.createEmailSession(userInfo.email, userInfo.password);
      alert("Email berhasil didaftarkan, Silahkan Login!");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {}
    setLoading(false);
  };

  const contextData = {
    openAlert,
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? (
        <div class="flex bg-slate-100 p-8 justify-center min-h-full">
          <div class="text-2xl">
            <img src="./loading-logo.gif" alt="loading.." />
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

//Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
