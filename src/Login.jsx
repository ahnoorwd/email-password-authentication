import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase.init";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
const Login = () => {
  const [errormessage, seterrormessage] = useState("");
  const [success, setsuccess] = useState(false);
  const [showicon, setshowicon] = useState(false);

  useEffect(() => {
    if (success) {
      Swal.fire({
        title: "Success!",
        text: "You are logged in",
        icon: "success",
        confirmButtonText: "Done",
      });
    }
  }, [success]);
  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(name, email, password,terms);
    seterrormessage("");
    setsuccess(false);
    if(!terms){
        seterrormessage('please fill the terms and condition ');
        return ;
    }
    if (password.length < 6) {
      seterrormessage("password should  be atleast 6 characters");
      return;
    }
    const radexjs = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
    if (!radexjs.test(password)) {
      seterrormessage(
        "At least one uppercase one lowercase one specialcase must "
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setsuccess(true);
        form.reset();
      })
      .catch((error) => {
        console.log("ERROR IS HERE :", error.message);
        seterrormessage(error.message);
        setsuccess(false);
      });
  };
  return (
    <div className="w-6/12 mx-auto my-4">
      <h2 className="text-3xl font-bold">Login First </h2>
      <form onSubmit={handlelogin}>
        <label className="input input-bordered my-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            name="name"
            placeholder="Username"
          />
        </label>

        <label className="input input-bordered my-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            name="email"
            className="grow"
            placeholder="Email"
          />
        </label>

        <div className="relative">
          <label className="input input-bordered my-4 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              />
            </svg>
            <input
              type={showicon ? "text" : "password"}
              className="grow"
              placeholder="password"
              name="password"
            />
          </label>

          <button
            onClick={() => setshowicon(!showicon)}
            className="absolute top-5 ml-[250px]"
          >
            {showicon ? <IoIosEyeOff /> : <IoMdEye />}
          </button>

          <div className=" ">
            <label className="label justify-start cursor-pointer">

            <input
                type="checkbox"
                name="terms"
                className="checkbox checkbox-primary "
              />
           
            <span className="label-text ml-2">Agree with our terms and condition </span>
           
          
            </label>
          </div>

          <button className="btn w-full bg-gray-500 text-yellow-500">
            Login Now
          </button>
        </div>
      </form>
      {errormessage && (
        <p className="text-red-500 font-bold text-center">{errormessage}</p>
      )}
    </div>
  );
};

export default Login;
