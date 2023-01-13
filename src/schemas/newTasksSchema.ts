import * as yup from "yup";
export const NewTaskSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required.")
    .max(24, "Title must be less than 100 characters."),
  description: yup
    .string()
    .required("Description is required.")
    .min(24, "Description must be at least 24 characters.")
    .max(512, "Description must be less than 512 characters"),
  assignee: yup
    .string()
    .email(({ value }) => `${value} is not valid email.`)
    .required("Email is required."),
  priority: yup
    .number()
    .test(
      "required",
      "Priority is required",
      (value) => typeof value !== undefined && (value as number) > 0
    )
    .required("Priority is required."),
});
