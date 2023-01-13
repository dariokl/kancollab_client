export interface IStepRender<T> {
  currentStep: number;
  isLoading: boolean;
  setCurrentStep: (step: number) => void;
  onFormSubmit: (arg: T) => void;
}
