import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";



export const Signin = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);
  const [isSignUp, setSignUp] = useState(false);

  const handleSignIn = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await fetch("https://serverhelper.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if(!response.ok) {
        console.log("Error");
        return;
      }

      const result = await response.json();
      console.log(result);
      if(result.msg == "Recheck Your Email ID") {
        setError("Recheck your email id");
        return;
      }

      localStorage.setItem('auth', result.token);
      navigate("/challenges"); // Redirect to dashboard or home
    } catch (error) {
      console.error("Error signing in:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-signupbg min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center backdrop-blur-sm bg-opacity-5">
      <div className=" w-1/2 m-5 sm:m-10 md:max-w-[500px] bg-white shadow-lg sm:rounded-lg p-8">
        <button className="w-full text-center text-2xl xl:text-3xl font-extrabold bg-none" onClick={() => navigate("/")}>
          Healthy Hive
        </button>
        <h2 className="text-center font-bold text-xl mt-2 text-cyan-800">Welcome back!</h2>
        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}

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
              className=" px-3 py-2 border w-full rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
          <div className="mb-4 w-1/2 m-auto flex flex-col md:flex-row md:justify-between">
            <button
              type="button"
              className="mt-5 w-full py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300 mr-1.5"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            {/* <button
              type="button"
              className="mt-5 w-full py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button> */}
            </div>
            <p className="text-center text-sm">Don&apos;t have account? <a href="/signup" className="text-cyan-700">Sign in</a></p>
        </form>
      </div>
    </div>
  );
};
