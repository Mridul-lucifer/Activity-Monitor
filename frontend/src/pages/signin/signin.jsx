import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";



export const Signin = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Signin successful:", result);

      localStorage.setItem('auth', result.token);
        navigate("/challenges"); // Redirect to dashboard or home
      } else {
        setError(result.message || "Signin failed. Please try again.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-signupbg min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center backdrop-blur-sm bg-opacity-5">
      <div className="max-w-screen-md w-full m-5 sm:m-10 bg-white shadow-lg sm:rounded-lg flex flex-col items-center p-8">
        <h1 className="text-2xl xl:text-3xl font-extrabold text-center">
          Sign In
        </h1>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <form className="w-full mt-6">
          {/* Email */}
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              ref={emailRef}
              id="email"
              type="text"
              placeholder="abc@example.com"
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4 md:mb-0 md:mr-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              ref={passwordRef}
              id="password"
              type="password"
              placeholder="******************"
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Buttons */}
          <div className="mb-4 flex flex-col md:flex-row md:justify-between">
            <button
              type="button"
              className="mt-5 w-full py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300 mr-1.5"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              type="button"
              className="mt-5 w-full py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
