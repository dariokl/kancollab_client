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

export interface INewBoard {
  name: string;
  description: string;
  members: string[];
}
const NewBoard = () => {
  const steps: string[] = ["Name", "Description", "Members"];
  const [currentStep, setCurrentStep] = useState<number>(0);
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();
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
      <div className="bg-white w-1/2 shadow-md rounded-lg h-[420px] overflow-y-auto">
        <div className="py-6 px-6 flex flex-col">
          <div className="flex justify-end">
            <IconButton icon={IoIosArrowRoundBack} />
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
            <div className="flex items-center justify-center text-sm">
              {steps.map((step, index) => (
                <div
                  className="w-1/3  mt-6 h-1 flex justify-start items-center"
                  key={step}
                >
                  <div
                    className={`flex items-center jusify-end  h-6 w-6 rounded-full
                    ${currentStep > index ? "bg-green-100" : "bg-gray-100"}
                  `}
                  >
                    <div>
                      <IoIosCheckmarkCircle
                        className={`${
                          currentStep > index
                            ? "text-green-600"
                            : "text-gray-600"
                        } ml-1`}
                      />
                    </div>
                    <span
                      className={`ml-2 text-xs ${
                        currentStep === index ? "text-blue-600" : ""
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
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
    </div>
  );
};

export default NewBoard;
