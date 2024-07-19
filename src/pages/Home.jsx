import { Navigate } from "react-router-dom";
import useAuthorize from "../features/authentication/useAuthorize";
import Loading from "../ui/Loading";

function Home() {
  const { isAuthenticated, isLoading, user } = useAuthorize();

  if (!isAuthenticated && !isLoading) return <Navigate to="/auth" replace />;

  if (!user.isActive && !isLoading)
    return <Navigate to="/complete-profile" replace />;

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  return <Navigate to={`/${user.role.toLowerCase()}`} replace />;
}

export default Home;
