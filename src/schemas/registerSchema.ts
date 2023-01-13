import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
    email: yup.string().required("Email is required."),
    password: yup.string().required("Password is required."),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match.")
        .required("Field is required."),
});
