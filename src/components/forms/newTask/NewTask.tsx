import { useState } from "react";
import { IoIosArrowRoundBack, IoIosClipboard } from "react-icons/io";
import { useMutation } from "react-query";
import { INewTask } from "../../../types/boardTypes";
import IconButton from "../../base/IconButton";
import StepperProgress from "../../StepperProgress";
import StepRenderer from "./StepRenderer";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useLocation, useNavigate } from "react-router-dom";
const NewTask = () => {
  const axios = useAxiosPrivate();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const steps: string[] = ["Title", "Description", "Assignee"];

  const navigate = useNavigate();

  const {
    state: { sectionId: id, boardId },
  } = useLocation();

  const { mutate, isLoading } = useMutation(
    (submitData: INewTask) =>
      axios.post("/tasks/create", { ...submitData, id: id }),
    {
      onSuccess: () => {
        navigate(`/board/${boardId}`);
      },
    }
  );

  const handleSubmit = (data: INewTask) => {
    mutate(data);
  };

  return (
    <div className="flex justify-center items-center mt-2 mb-2">
      <div className="bg-white w-1/2 shadow-md rounded-lg">
        <div className="py-6 px-6 flex flex-col">
          <div className="flex justify-end">
            <IconButton
              icon={IoIosArrowRoundBack}
              onClick={() => navigate(`/board/${boardId}`)}
            />
          </div>
          <div className="flex flex-col border-solid">
            <div className="bg-blue-100 w-fit h-10 w-10 rounded-full flex justify-center items-center mb-2">
              <IoIosClipboard
                className="text-blue-600 w-10 rounded-lg"
                size={20}
              />
            </div>
            <h6 className="font-bold text-md">Create new Task</h6>
            <p className="text-xs mt-2 tracking-wide text-gray-600">
              Add new task to your board.
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
export default NewTask;
