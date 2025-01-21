import React from "react";

const Signup = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign Up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full  bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 border-customButtonBorder sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 border-customButtonBorder sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center bg-customButton px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          By proceeding, you agree to our
          <a
            href="#a"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Tearms And Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
