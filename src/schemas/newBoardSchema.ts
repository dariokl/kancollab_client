import * as yup from "yup";

export const NewBoardSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .max(24, "Name must be less than 24 characters."),
  description: yup
    .string()
    .required("Description is required.")
    .min(24, "Description must be at least 24 characters.")
    .max(256, "Description must be less than 256 characters"),
  members: yup
    .array()
    .of(yup.string().email(({ value }) => `${value} is not valid email.`))
    .nullable()
    .max(5, "Maximum project members reached.")
    .test(
      "unique",
      "Duplicated email.",
      (value) => value?.length === new Set(value).size
    ),
});
