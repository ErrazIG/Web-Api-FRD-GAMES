"use strict";
import * as yup from 'yup';

export const memberValidator = yup.object().shape({
    username: yup.string()
                    .typeError("Le pseudo est invalide")
                    .trim()
                    .required("Le pseudo est obligatoire")
                    .min(2, "Le pseudo doit faire minimum 2 lettres")
                    .max(50, "Le pseudo doit faire maximum 50 lettres"),
    email: yup.date()
                    .typeError("L'email est invalide"),
    pwd: yup.date()
                    .typeError("Le mot de passe est invalide"),
                    //TODO pas sur du validator faut il les confirm avec ?
})