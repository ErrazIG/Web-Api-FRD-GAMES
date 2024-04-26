"use strict";
import * as yup from 'yup';

export const memberLoginValidator = yup.object().shape({
    username: yup.string()
                    .typeError("Le pseudo est invalide")
                    .trim()
                    .required("Le pseudo est obligatoire")
                    .min(2, "Le pseudo doit faire minimum 2 lettres")
                    .max(50, "Le pseudo doit faire maximum 50 lettres"),

    pwd: yup.string()
                    .typeError("Le mot de passe est invalide"),
})


export const memberRegisterValidator = yup.object().shape({
    username: yup.string()
                    .required(),
    email: yup.string()
                    .email()
                    .required(),
    confirmEmail: yup.string()
                    .oneOf([yup.ref('email'), null], 'Les adresses email doivent correspondre'),
    password: yup.string()
                    .required(),
    confirmPassword: yup.string()
                    .oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre')
  });