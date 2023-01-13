import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface IStepperProgress {
  steps: string[];
  currentStep: number;
}

const StepperProgress: React.FC<IStepperProgress> = ({
  steps,
  currentStep,
}): JSX.Element => {
  return (
    <div className="flex">
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
                  currentStep > index ? "text-green-600" : "text-gray-600"
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
  );
};

export default StepperProgress;
