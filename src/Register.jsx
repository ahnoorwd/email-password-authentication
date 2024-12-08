import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase.init";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

const Register = () => {
    const [success,setsuccess] = useState(false)

    useEffect(() => {
        if (success) {
          Swal.fire({
            title: "Success!",
            text: "registration successfully!!",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      }, [success]);
    const handleregister =(e)=>{
      e.preventDefault();
      const form = e.target;
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(name,email,password)
      setsuccess(false)
      createUserWithEmailAndPassword(auth,email,password)
      .then(result=>{
        console.log(result.user)
        setsuccess(true)
        form.reset();
      })
      .catch(error=>{
        console.log("ERROR IS HERE :",error);
        setsuccess(false)
      })
    }
  return (
   <div className="w-6/12 mx-auto my-4">
     <form onSubmit={handleregister}>
     
      <label className="input input-bordered my-4 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input type="text" className="grow" name="name" placeholder="Username" />
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
        <input type="text" name="email" className="grow" placeholder="Email" />
      </label>
     
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
        <input type="password"  className="grow" placeholder="password" name="password" />
      </label>

      <button className="btn w-full bg-gray-500 text-yellow-300">Register Now</button>
    </form>
   </div>
  );
};

export default Register;
