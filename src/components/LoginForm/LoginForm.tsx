import COLORS from "@/config/colors";
import React from "react";

const LoginForm = () => {

    

  return (
    <form action="">
      <div className="email">
        <label htmlFor="email" className="custom-label">
          Email
        </label>
        <input
          type="text"
          id="password"
          className="custom-input"
          style={{ width: "100%" }}
        />
      </div>

      <div className="password">
        <label htmlFor="password" className="custom-label">
          Password
        </label>
        <input
          type="text"
          id="password"
          className="custom-input w-[100%]"
          style={{ width: "100%" }}
        />
      </div>

      <div>
        <a
          href=""
          className="custom-label"
          style={{
            color: COLORS.MAIN_COLOR,
          }}
        >
          Forgot your passoword?
        </a>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="custom-btn text-white mt-2 font-semibold text-lg"
          style={{
            width: "100%",
            backgroundColor: COLORS.MAIN_COLOR,
            color: "white",
            borderRadius: "6px",
          }}
        >
          Sign In
        </button>
      </div>
      <div className="mt-3">
        <p className="custom-label text-center block">
          Don't have a login?{" "}
          <span
            className="cursor-pointer underline"
            style={{
              color: COLORS.MAIN_COLOR,
            }}
          >
            Register here.
          </span>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
