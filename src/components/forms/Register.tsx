import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosLock, IoIosMail } from "react-icons/io";
import { useMutation } from "react-query";
import axios from "../../api/axios";
import { RegisterSchema } from "../../schemas/registerSchema";
import Error from "../alerts/Error";
import Sucess from "../alerts/Sucess";
import AuthContent from "../AuthContent";
import Button from "../base/Button";
import Input from "../base/Input";
import { Link, Navigate, useNavigate } from "react-router-dom";

interface IRegister {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    mode: "onBlur",
    resolver: yupResolver(RegisterSchema),
  });

  const navigate = useNavigate();

  const { mutate, isError, isSuccess, isLoading } = useMutation(
    (submitData: IRegister) => axios.post("/auth/register", { ...submitData }),
    {
      onSuccess: () => {
        navigate("/login");
      },
    }
  );

  const onSubmit: SubmitHandler<IRegister> = (data) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-[600px] w-[800px] items-center bg-slate-100 text-gray-800 font-sans"
    >
      <AuthContent />
      <div className="flex-grow flex items-center justify-center border-1">
        <div className="flex-col space-y-4 bg-white h-full rounded-lg shadow-md px-12 py-12 ">
          <div className="bg-blue-100 w-fit h-10 w-10 rounded-full flex justify-center items-center">
            <IoIosLock className="text-blue-600 rounded-lg w-10" size={20} />
          </div>
          <div className="text-md font-semibold">Register to Kancollab</div>
          <div className="text-xs text-gray-600">Start collaborating.</div>
          <Input
            {...register("email")}
            twind="bg-white pl-10"
            placeholder="Email"
            label="Email"
            type="email"
            icon={(props) => <IoIosMail color="slate" />}
            error={Boolean(errors?.email)}
            infoLabel={errors?.email?.message}
          />
          <Input
            {...register("password")}
            twind="bg-white pl-10"
            placeholder="Password"
            label="Password"
            type="password"
            icon={(props) => <IoIosLock color="slate" />}
            error={Boolean(errors?.password)}
            infoLabel={errors?.password?.message}
          />
          <Input
            {...register("confirmPassword")}
            twind="bg-white pl-10"
            placeholder="Password"
            label="Confirm Password"
            type="password"
            icon={(props) => <IoIosLock color="slate" />}
            error={Boolean(errors?.confirmPassword)}
            infoLabel={errors?.confirmPassword?.message}
          />
          <Button
            text="Register"
            type="submit"
            twind="w-full"
            loading={isLoading}
          />
          <Link to="/login">
            <div className="mt-2">
              <div className="mt-4 text-xs hover:underline">
                Already have an Account ?
              </div>
            </div>
          </Link>
          {isSuccess && (
            <Sucess message="You have Successfully created your account." />
          )}
          {isError && <Error message="Email already in use." />}
        </div>
      </div>
    </form>
  );
};

export default Register;
