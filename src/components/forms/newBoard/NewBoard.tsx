import { useState } from "react";
import {
  IoIosArrowRoundBack,
  IoIosCheckmarkCircle,
  IoIosPaper,
} from "react-icons/io";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import IconButton from "../../base/IconButton";
import StepRenderer from "./StepRenderer";
import StepperProgress from "../../StepperProgress";
import { INewBoard } from "../../../types/boardTypes";

const NewBoard = () => {
  const steps: string[] = ["Name", "Description", "Members"];
  const [currentStep, setCurrentStep] = useState<number>(0);
  const axios = useAxiosPrivate();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(
    (submitData: INewBoard) => axios.post("/boards/create", { ...submitData }),
    {
      onSuccess: () => {
        navigate("/home");
      },
    }
  );

  const handleSubmit = (data: INewBoard) => {
    mutate(data);
  };

  return (
    <div className="flex justify-center items-center w-full h-full mt-2 mb-2">
      <div className="bg-white w-1/2 shadow-md rounded-lg">
        <div className="py-6 px-6 flex flex-col">
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
              automatically generate a wiki page for your project.
            </p>
            <span className="mt-2 border-b-[0.5px] border-gray-500" />
            <StepperProgress steps={steps} currentStep={currentStep} />

            <StepRenderer
              currentStep={currentStep}
              setCurrentStep={(step: number) => setCurrentStep(step)}
              onFormSubmit={(data) => handleSubmit(data)}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBoard;
