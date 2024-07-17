import useAuthorize from "../features/authentication/useAuthorize";

function Main({ children }) {
  const { isVerified } = useAuthorize();

  return (
    <div className="bg-secondary-100 py-8 px-6 sm:px-8 overflow-y-auto">
      <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
        {isVerified ? (
          children
        ) : (
          <h1 className="font-bold text-2xl text-secondary-900">
            پروفایل شما در انتظار تایید است
          </h1>
        )}
      </div>
    </div>
  );
}

export default Main;
