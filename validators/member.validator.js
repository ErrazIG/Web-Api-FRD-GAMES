"use strict";
import * as yup from "yup";

const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\d\s]).{8,}$/;

export const memberUpdateValidator = yup.object().shape({
  username: yup
    .string()
    .typeError("Le pseudo est invalide")
    .required("Le pseudo est obligatoire"),
  email: yup
    .string()
    .typeError("L'email est invalide")
    .required("L'email est obligatoire"),
  desc: yup.string().typeError("La description est invalide"),
  role_id: yup
    .string()
    .typeError("Le role est invalide")
    .required("Le role est obligatoire"),
});

export const memberUpdatePwdValidator = yup.object().shape({
  password: yup
    .string()
    .typeError("Le mot de passe est invalide")
    .matches(
      pwdRegex,
      "Votre mot de passe doit contenir au moins 8 caractères, incluant une majuscule, une minuscule, un chiffre et un caractère spécial."
    )
    .required("Le mot de passe est obligatoire"),
  confirmPassword: yup
    .string()
    .typeError("Le pseudo est invalide")
    .required("Le mot de passe de confirmation est obligatoire")
    .oneOf([yup.ref("password")], "Les mots de passe doivent correspondre"),
});
