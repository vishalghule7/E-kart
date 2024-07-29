import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col text-2xl items-center mt-10">
      <h2>No Page Found!</h2>
      <button onClick={handleGoHome} className="px-2 py-1 mt-4 rounded-lg text-sm bg-black text-white">
        Go Home
      </button>
    </div>
  );
}

export default NoPage;
