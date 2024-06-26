import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <section className="py-24 bg-gray-600">
      <div>
        <Helmet>
          <title>online-forum | login</title>
        </Helmet>
        <div
          className="hero min-h-[calc(100vh-68px)]"
          style={
            {
              //   backgroundImage:
              //     "url(https://i.ibb.co/Bf9578s/network-3139201-1280.jpg)",
            }
          }
        >
          <div className="hero-overlay bg-opacity-90"></div>
          <div className="hero-content flex flex-col lg:flex-row items-center gap-8">
            <div className="text-center w-full md:w-1/2 lg:text-left">
              <img
                src="https://i.ibb.co/MZvKB2B/3426526-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="card shrink-0 w-full md:w-1/2 m-4 rounded-md border-2 shadow-2xl p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h2 className="text-3xl text-white font-bold text-center uppercase">
                  Login Here
                </h2>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    {...register("email", { required: true })}
                    className="input p-3 rounded-md border border-white focus:border-white w-full text-white bg-transparent focus:bg-transparent"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      {...register("password", { required: true })}
                      className="input p-3 rounded-md border border-white focus:border-white w-full text-white bg-transparent focus:bg-transparent"
                    />
                    <span
                      className="absolute top-4 right-5"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaRegEye className="text-white" />
                      ) : (
                        <FaRegEyeSlash className="text-white" />
                      )}
                    </span>
                  </div>
                </div>
                {/* <div className="form-control">
                <label className="label w-full">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  // onChange={handleValidateCaptcha}
                  name="captcha"
                  placeholder="type the captcha"
                  className="input input-bordered border-white w-full text-white bg-transparent focus:bg-transparent"
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-xs btn-info mt-2"
                >
                  Validate
                </button>
              </div> */}
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    //   disabled={disabled}
                    className="w-full text-center p-3 bg-green-600 rounded-md text-white"
                    value="Login"
                  />
                </div>
                <div>
                  {/* <input
                  type="submit"
                  onClick={handleGoogleLogin}
                  className="btn btn-primary"
                  value="Login with Google"
                /> */}
                  {/* <SocialLogin></SocialLogin> */}
                </div>
                {/* <div className="form-control mt-6">
                <input
                  onClick={handleGoogleLogin}
                  type="submit"
                  className="btn btn-primary"
                  value="Login with Google"
                />
              </div> */}
                <p className="text-center text-white">
                  New here? Please{" "}
                  <Link className="text-white font-bold" to="/register">
                    Register
                  </Link>{" "}
                  Here
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
