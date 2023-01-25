import * as yup from "yup";

export const NewBoardSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .max(24, "Name must be less than 24 characters."),
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
