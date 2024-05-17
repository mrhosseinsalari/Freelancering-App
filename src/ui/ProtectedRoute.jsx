import useAuthorize from "../features/authentication/useAuthorize";

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated, isAuthorized } = useAuthorize();
  console.log(isAuthorized);

  return children;
}

export default ProtectedRoute;
