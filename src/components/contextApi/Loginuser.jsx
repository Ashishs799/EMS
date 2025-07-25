import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginUserContext = createContext();
const LoginUserContextProvider = ({ children }) => {
  // const [user, setUser] = useState(() => {
  //   return localStorage.getItem("UserLogin") || "";
  // });
  const [user, setUser] = useState("");

  const navigate = useNavigate();
  function userHandle() {
    switch (user) {
      case "Admin":
        navigate("/admin/dashboard");
        break;
      case "Employee":
        navigate("/employee/dashboard");
        break;
      default:
        toast.error("Please select a role first.");
    }
  }

  const data = {
    user,
    setUser,
    userHandle,
  };
  return (
    <LoginUserContext.Provider value={data}>
      {children}
    </LoginUserContext.Provider>
  );
};
export default LoginUserContextProvider;
export const useLoginUserContext = () => useContext(LoginUserContext);
