import React, { useState } from "react";
import axios from "axios";
//
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../app/slices/authSlice";

const BASE_URL = "https://wired66.pythonanywhere.com/";

export default function Login() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const postUrl = `${BASE_URL}auth/login/`;
    const postObject = {
      email: userInfo.email,
      password: userInfo.password,
    };

    try {
      setLoading(true);
      const res = await axios.post(postUrl, postObject);
      console.log(res.data);

      if (res.data.status_code === 200) {
        setLoading(false);
        sessionStorage.setItem("user_id", res.data.user_id);
        sessionStorage.setItem("refresh_token", res.data.refresh);
        sessionStorage.setItem("access_token", res.data.access);
        console.log("Session info stored in sessionStorage");
        setError(res.data.message);
        setUser(res);
        dispatch(authActions.Login({ token: res.data.access }));

        history("/", { replace: true });
      }
      setError(res.data.message);
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Something Went wrong");
      // Handle error, display error message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="text-center text-xs mt-4">{error}</p>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleRegister}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) =>
                    setUserInfo({
                      ...userInfo,
                      email: e.target.value,
                    })
                  }
                  autoComplete="email"
                  required
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  onChange={(e) =>
                    setUserInfo({
                      ...userInfo,
                      password: e.target.value,
                    })
                  }
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? "Login..." : "Login"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have account?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
