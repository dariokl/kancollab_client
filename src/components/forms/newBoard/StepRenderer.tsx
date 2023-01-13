import React, { useEffect } from "react";
import Button from "../../base/Button";
import Input from "../../base/Input";
import TextArea from "../../base/TextArea";
import EmailListInput from "../../base/EmailListInput";
import { useForm } from "react-hook-form";
import { NewBoardSchema } from "../../../schemas/newBoardSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IStepRender } from "../../../types/stepperTypes";
import { INewBoard } from "../../../types/boardTypes";

const StepRenderer: React.FC<IStepRender<INewBoard>> = ({
  currentStep,
  setCurrentStep,
  onFormSubmit,
  isLoading,
}): JSX.Element | null => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors, isValid },
    trigger,
  } = useForm<INewBoard>({
    mode: "onBlur",
    resolver: yupResolver(NewBoardSchema),
  });

  useEffect(() => {
    trigger();
  }, [currentStep]);

  switch (currentStep) {
    case 0:
      return (
        <div className="flex flex-col mt-6">
          <Input
            {...register("name")}
            label="Name"
            placeholder="Name"
            type="text"
            twind="w-[334px]"
            error={Boolean(errors?.name)}
            infoLabel={errors?.name?.message}
          />
          <div className="flex justify-end mt-4 gap-2">
            <Button
              disabled={Boolean(errors?.name)}
              text="Continue"
              twind="py-2 px-2 text-xs"
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
            />
          </div>
        </div>
      );
    case 1:
      return (
        <div className="flex flex-col mt-6">
          <TextArea
            {...register("description")}
            label="Project Descirption"
            error={Boolean(errors?.description)}
            infoLabel={errors?.description?.message}
          />
          <div className="flex justify-end mt-4 gap-2">
            <Button
              text="Back"
              twind="py-2 px-2 text-xs bg-gray-500"
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
            />
            <Button
              disabled={Boolean(errors?.description)}
              text="Continue"
              twind="py-2 px-2 text-xs"
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
            />
          </div>
        </div>
      );
    case 2:
      return (
        <div className="flex flex-col mt-6">
          <EmailListInput
            {...register("members")}
            defaultValue={getValues("members")}
            label="Add Members"
            error={Boolean(errors?.members)}
            errorsObject={errors?.members}
            setValue={(value) =>
              setValue("members", value, { shouldValidate: true })
            }
          />
          <div className="flex justify-end mt-4 gap-2">
            <Button
              text="Back"
              twind="py-2 px-2 text-xs bg-gray-500"
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
            />
            <Button
              disabled={!isValid}
              text="Create Board"
              twind="py-2 px-2 text-xs"
              type="button"
              onClick={() => onFormSubmit(getValues())}
              loading={isLoading}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default StepRenderer;
