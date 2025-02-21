import { useRef, useState } from "react";
import {useNavigate } from 'react-router-dom'
// import myBackground from './../Photos/signup.jpg';

export const Signup = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const dobRef = useRef(null);
  const emailRef = useRef(null);
  const genderRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const weightRef = useRef(null);
  const [age, setAge] = useState(null);
  const navigate = useNavigate();
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleSignUp = async () => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const dob = dobRef.current.value;
    const email = emailRef.current.value;
    const gender = genderRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const weight = weightRef.current.value;

    if (password !== confirmPassword) {
      passwordRef.current.classList.add("border-red-500", "focus:ring-red-400");
      confirmPasswordRef.current.classList.add(
        "border-red-500",
        "focus:ring-red-400"
      );
      return;
    } else {
      passwordRef.current.classList.remove(
        "border-red-500",
        "focus:ring-red-400"
      );
      confirmPasswordRef.current.classList.remove(
        "border-red-500",
        "focus:ring-red-400"
      );
    }

    const userAge = calculateAge(dob);
    setAge(userAge);

    const userData = {
      firstName,
      lastName,
      dob,
      age: userAge,
      email,
      gender,
      password,
      weight
    };

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      console.log(result);
      localStorage.setItem('auth',result.token);
      // alert("Signup Response:", result.msg);
      navigate('/challenges');
    } catch (error) {
      console.error("Error signing up:", error);
    } 
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center">
      <div className="max-w-screen-md w-full m-5 sm:m-10 bg-white shadow-lg sm:rounded-lg flex flex-col items-center p-8">
        <h1 className="text-xl xl:text-2xl font-extrabold text-center">
          Healthy Hive
        </h1>

        <h2 className="text-lg xl:text-xl font-bold">Sign Up</h2>

        <form className="w-full mt-6">
          {/* First & Last Name */}
          <div className="mb-4 flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0 md:w-1/2 md:mr-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                ref={firstNameRef}
                id="firstName"
                type="text"
                placeholder="First Name"
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="md:w-1/2 md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                ref={lastNameRef}
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          {/* DOB */}
          <div className=" flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:w-1/2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="dob"
            >
              Date of Birth
            </label>
            <input
              ref={dobRef}
              id="dob"
              type="date"
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={() => setAge(calculateAge(dobRef.current.value))}
            />
          </div>

            <div className="md:w-1/2 md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="weight"
              >
                Weight
              </label>
              <input
                ref={weightRef}
                id="weight"
                type="number"
                placeholder="Weight in kg"
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          {/* Age Display */}
          {age !== null && <p className="text-sm text-gray-700">Age: {age}</p>}

          {/* Mobile */}
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="emial"
            >
              Email
            </label>
            <input
              ref={emailRef}
              id="email"
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Gender Dropdown */}
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              ref={genderRef}
              id="gender"
              defaultValue=""
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="" disabled>
                Select your Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>



          {/* Password & Confirm Password */}
          <div className="mb-4 flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0 md:w-1/2 md:mr-2">
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
            <div className="md:w-1/2 md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="c_password"
              >
                Confirm Password
              </label>
              <input
                ref={confirmPasswordRef}
                id="c_password"
                type="password"
                placeholder="******************"
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="button"
            className="mt-5 w-full py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
