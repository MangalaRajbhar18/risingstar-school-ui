import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const isAdminLogin = localStorage.getItem("adminLogin");

  if(!isAdminLogin){
    return <Navigate to="/admin-login" />;
  }

  return children;
}

export default ProtectedRoute;