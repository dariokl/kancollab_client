import { useState } from "react";
import { IoIosArrowRoundBack, IoIosPaper } from "react-icons/io";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { INewBoard } from "../../../types/boardTypes";
import EmailListInput from "../../base/EmailListInput";
import IconButton from "../../base/IconButton";
import Input from "../../base/Input";
import { IoIosPaperPlane } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewTaskSchema } from "../../../schemas/newTasksSchema";
import { NewBoardSchema } from "../../../schemas/newBoardSchema";

const NewBoard = () => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<INewBoard>({
    mode: "onBlur",
    resolver: yupResolver(NewBoardSchema),
  });

  const { mutate, isLoading } = useMutation(
    (submitData: INewBoard) => axios.post("/boards/create", { ...submitData }),
    {
      onSuccess: () => {
        navigate("/home");
      },
    }
  );

  const onSubmit = (data: INewBoard) => {
    mutate(data);
  };

  return (
    <div className="flex justify-center items-center mt-6 mb-2">
      <div className="bg-white w-1/2 shadow-md rounded-lg">
        <div className="py-4 px-6 flex flex-col">
          <div className="flex justify-end">
            <IconButton
              icon={IoIosArrowRoundBack}
              onClick={() => navigate("/home")}
            />
          </div>
          <div className="flex flex-col border-solid">
            <div className="bg-blue-100 w-fit h-10 w-10 rounded-full flex justify-center items-center mb-2">
              <IoIosPaper className="text-blue-600 rounded-lg" size={20} />
            </div>
            <h6 className="font-bold text-md">Create new Board</h6>
            <p className="text-xs mt-2 tracking-wide text-gray-600">
              Create a new board,add your team members.Creating new board will
              automatically generate page for your board.
            </p>
            <span className="mt-4 border-b-[0.5px] border-gray-500" />
            <form className="flex-col mt-6" onSubmit={handleSubmit(onSubmit)}>
              <Input
                {...register("name")}
                type="text"
                placeholder="Board Name"
                label="Board Name"
                twind="w-[328px]"
              />
              <span className="m-4" />
              <EmailListInput
                setValue={(members) =>
                  setValue("members", members, { shouldValidate: true })
                }
              />
              <div className="flex justify-end mt-4">
                <IconButton
                  title="Create Board"
                  type="submit"
                  icon={() => <IoIosPaperPlane color="#2563eb" size={20} />}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBoard;
