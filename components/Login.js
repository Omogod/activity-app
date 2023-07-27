import React from "react";

const Login = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className="font-extrabold select-none text-2xl sm:text-4xl">LOGIN</h1>
      <input
        type="text"
        placeholder="Email Address"
        className="outline-none duration-300 border-b-2 border-solid
         border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]"
      ></input>
      <input
        type="text"
        placeholder="Password"
        className="outline-none text-slate-900 p-2 w-full max-w-[40ch] 
        duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
      ></input>
      <button className="w-full max-w-[40ch] border border-white uppercase py-2 duration-300
      relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full
      after:h-full overflow-hidden hover:after:-translate
      ">SUBMIT</button>
    </div>
  );
};

export default Login;
