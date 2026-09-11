import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const registerschema = yup
  .object({
    email: yup.string().required('email is required').email('must be in email format'),
    password: yup.string()
      .required('password is required')
      .min(8, "must be greater then 8")
      .max(15, "thats too big"),
  })
  .required();

const Register = () => {
  //   const [emailvalue, setEmailvalue] = useState("");
  //   const [passwordvalue, setPasswordvalue] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerschema),
  });
  const onSubmit = (data) => console.log(data);
  //   const [userdata,setUserdata]=useState({
  //     email:'',
  //     password:'',
  //   })
  //   const handleemail = (e) => {
  //     setEmailvalue(e.target.value);
  //   };
  //   const handlepassword = (e) => {
  //     setPasswordvalue(e.target.value);
  //   };

  //   const handlesubmit = (e) => {
  //     const storeobject = {
  //       emaildata: emailvalue,
  //       passworddata: passwordvalue,
  //     };
  //     e.preventDefault();
  //     console.log(storeobject);
  //   };
  return (
    <div className="flex justify-center flex-col items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-3">
          <div>Username</div>
          <input
            name=""
            className="border-4 border-b-black"
            type="text"
            placeholder="prakash shrestha"
          />
        </div>
        <div className="mt-3">
          <div>Email</div>
          <input
            name="email"
            {...register("email")}
            className="border-4 border-b-black"
            placeholder="prakash@gmail.com"
          />
          <p className="font-sm text-red-500">{errors.email?.message}</p>
        </div>

        <div className="mt-3">
          <div>password</div>
          <input
            name="password"
            {...register("password")}
            className="border-4 border-b-black"
            
            placeholder="prakash@123"
          />
          <p className="font-sm text-red-500">{errors.password?.message}</p>
        </div>
        {/* <div className="flex gap-4 mt-3">
          <div>Gender</div>
          <select className="border-4">
            <option>Select</option>
            <option>male</option>
            <option>female</option>
          </select>
        </div> */}
        <div>
          <button
            type="submit"
            className="border-2 border-amber-300 bg-amber-200 mt-3  "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

// form handling : react hook form , formik
// form: zod,yup,joi
