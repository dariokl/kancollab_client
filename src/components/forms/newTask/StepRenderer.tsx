import React, { useEffect } from "react";
import { IStepRender } from "../../../types/stepperTypes";
import { INewTask } from "../../../types/boardTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NewTaskSchema } from "../../../schemas/newTasksSchema";
import Input from "../../base/Input";
import TextArea from "../../base/TextArea";
import Button from "../../base/Button";
import Select from "../../base/Select";

const StepRenderer: React.FC<IStepRender<INewTask>> = ({
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
  } = useForm<INewTask>({
    mode: "onBlur",
    resolver: yupResolver(NewTaskSchema),
  });

  console.log(isValid);
  useEffect(() => {
    trigger();
  }, [currentStep]);

  switch (currentStep) {
    case 0:
      return (
        <div className="mt-6">
          <Input
            {...register("title")}
            type="text"
            label="Title"
            placeholder="Title"
            twind="w-[334px]"
            error={Boolean(errors?.title)}
            infoLabel={errors?.title?.message}
          />
          <div className="flex justify-end mt-4 gap-2">
            <Button
              disabled={Boolean(errors?.title)}
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
        <div className="mt-6">
          <TextArea
            {...register("description")}
            label="Task Description"
            error={Boolean(errors?.description)}
            infoLabel={errors?.description?.message}
          />
          <div className="flex justify-end gap-2">
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
              loading={isLoading}
            />
          </div>
        </div>
      );

    case 2:
      return (
        <div className="mt-6 flex-col">
          <Select
            {...register("priority")}
            options={[]}
            onChange={(e) => setValue("priority", Number(e.target.value))}
            error={Boolean(errors?.priority)}
            infoLabel={errors?.priority?.message}
          />
          <div className="mt-4">
            <Input
              {...register("assignee")}
              type="text"
              placeholder="Assignee"
              label="Assignee"
              twind="w-[334px]"
              error={Boolean(errors?.assignee)}
              infoLabel={errors?.assignee?.message}
            />
          </div>
          <div className="flex justify-end mt-4 gap-2">
            <Button
              text="Back"
              twind="py-2 px-2 text-xs bg-gray-500"
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
            />
            <Button
              disabled={!isValid}
              text="Create Task"
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
