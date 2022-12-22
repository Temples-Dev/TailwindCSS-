import React from "react";

const Form = () => {
  return (
    <div>
      <form action="#">
        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-400 py-1 px-4"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-400 py-1 px-4"
          />
        </div>
        <div className="mt-5">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-400 py-1 px-4 w-full"
          />
        </div>
        <div className="mt-5">
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-400 py-1 px-4 w-full"
          />
        </div>
        <div className="mt-5">
          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-400 py-1 px-4 w-full"
          />
        </div>
        <div className="mt-5">
          <input type="checkbox" className="border border-gray-400 " />
          <span>
            I accept  {""}
            <a href="#" className="font-semibold text-purple-500">
              Terms of Use {""}
            </a>
            & {""}
            <a href="#" className="font-semibold text-purple-500">
              Privacy Policy
            </a>
          </span>
        </div>
        <div className="mt-5">
            <button type="submit" className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
        </div>
      </form>
    </div>
  );
};

function Container() {
  return (
    <div>
      <h1 className="min-h-screen py-20 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 bg-gray-900 flex flex-col items-center justify-center py-12">
              <h1 className="text-white text-5xl mb-3">Welcome</h1>
              <div>
                <p className="text-fuchsia-500 text-3xl">#!Temples-Dev/&gt;</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">
                Register
              </h2>
              <p className="mb-4 text-xs">
                Create your account. its free and it only take a minute
              </p>
              {<Form />}
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default Container;
