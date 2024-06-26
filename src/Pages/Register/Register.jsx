import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Register() {
    const [ showPassword, setShowPassword ] = useState(false);

        const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
        } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) 

    return (
        <section>
            <div>
      <Helmet>
        <title>register</title>
      </Helmet>
      <div
        className="hero min-h-[calc(100vh-68px)]"
        style={{
        //   backgroundImage:
        //     "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          <div className="text-center w-full md:w-1/2 lg:text-left">
            <img src="https://i.ibb.co/gRKkPfM/doctor-signup.png" alt="" />
          </div>
          <div className="card shrink-0 w-full md:w-1/2 border-2 shadow-2xl py-4 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="text-3xl text-white font-bold text-center uppercase">
                Register Here
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  // name="name"
                  {...register("name", { required: true, maxLength: 30 })}
                  placeholder="name"
                  className="input input-bordered border-white focus:border-white w-full text-white bg-transparent focus:bg-transparent"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  // name="email"
                  {...register("email", { required: true, maxLength: 30 })}
                  placeholder="email"
                  className="input input-bordered border-white focus:border-white w-full text-white bg-transparent focus:bg-transparent"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    className="input input-bordered border-white focus:border-white w-full text-white bg-transparent focus:bg-transparent"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-500 text-sm">
                      Password is required
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600 text-sm">
                      Password must be minimum 6 characters
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-600 text-sm">
                      Password must be less than 20 characters
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600 text-sm">
                      Password must have one upperCase, one lowerCase, one
                      number and one special character and less than 20
                      characters
                    </span>
                  )}
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
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  placeholder="enter photo url"
                  className="input input-bordered border-white focus:border-white w-full text-white bg-transparent focus:bg-transparent"
                />
                {errors.photoURL && (
                  <span className="text-red-600 text-sm">
                    PhotoURL is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-info"
                  type="submit"
                  value="Register"
                />
              </div>
              <div>
                {/* <SocialLogin></SocialLogin> */}
              </div>
            </form>
            <p className="text-center text-white">
              Already registered? Please{" "}
              <Link className="font-bold" to="/login">
                Login
              </Link>{" "}
              here
            </p>
          </div>
        </div>
      </div>
    </div>
        </section>
        );
}