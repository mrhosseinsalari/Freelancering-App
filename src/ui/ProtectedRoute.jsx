import { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "../ui/Loading";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load the authenticated user
  const { isLoading, isAuthenticated, isAuthorized, isVerified } =
    useAuthorize();

  // 2. check if is Authorized or not, check if is Authenticated or not
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/auth");
      return;
    }
    if (!isAuthorized && !isLoading) {
      navigate("/not-access", { replace: true });
      return;
    }
    if (!isVerified && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است");
      navigate("/");
    }
  }, [isAuthenticated, isAuthorized, isLoading, isVerified, navigate]);

  // 3. while loading => show a loading
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  // 4. if user isAuthenticated and isAuthorized => render the app
  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
