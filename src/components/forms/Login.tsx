import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosLock, IoIosMail, IoIosHome } from "react-icons/io";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { LoginSchema } from "../../schemas/loginSchema";
import Error from "../alerts/Error";
import Success from "../alerts/Sucess";
import AuthContent from "../AuthContent";
import Button from "../base/Button";
import Input from "../base/Input";
interface ILogin {
  email: string;
  password: string;
}

const Login: React.FC = (): JSX.Element => {
  const { initialize } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    mode: "onBlur",
    resolver: yupResolver(LoginSchema),
  });

  const { mutate, isError, isSuccess, isLoading } = useMutation(
    (submitData: ILogin) => axios.post("/auth/login", { ...submitData }),
    {
      onSuccess: ({ data }) => {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        initialize();
        navigate("/home");
      },
    }
  );

  const submit: SubmitHandler<ILogin> = (data) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex h-[600px] w-[800px] items-center bg-slate-100 text-gray-800 font-sans"
    >
      <AuthContent />
      <div className="flex-grow flex items-center justify-center border-1">
        <div className="flex-col space-y-4 bg-white h-full rounded-lg shadow-md px-12 py-12 ">
          <div className="bg-blue-100 w-fit h-10 w-10 rounded-full flex justify-center items-center">
            <IoIosHome className="text-blue-600 rounded-lg" size={20} />
          </div>
          <div className="text-md font-semibold">Login to Kancollab</div>
          <div className="text-xs text-gray-600">Start collaborating.</div>
          <Input
            {...register("email")}
            type="email"
            twind="bg-white pl-10 "
            placeholder="Email"
            label="Email"
            icon={() => <IoIosMail color="slate" />}
            error={Boolean(errors?.email)}
            infoLabel={errors?.email?.message}
          />

          <Input
            {...register("password")}
            twind="bg-white pl-10"
            placeholder="Password"
            label="Password"
            type="password"
            icon={() => <IoIosLock color="slate" />}
            error={Boolean(errors?.password)}
            infoLabel={errors?.password?.message}
          />
          <Button
            text="Login"
            type="submit"
            twind="w-full"
            loading={isLoading}
          />
          <Link to="/register">
            <div className="mt-4">
              <div className="mt-2 text-xs hover:underline">
                Dont have an Account ?
              </div>
            </div>
          </Link>

          {isSuccess && <Success message="You have Logged in Successfuly" />}
          {isError && <Error message="Invalid Email or Password !" />}
        </div>
      </div>
    </form>
  );
};

export default Login;
