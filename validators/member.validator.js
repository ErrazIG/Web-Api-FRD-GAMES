"use strict";
import * as yup from 'yup';

export const memberUpdateValidator = yup.object().shape({
    username: yup.string()
                    .typeError("Le pseudo est invalide")
                    .required("Le pseudo est obligatoire"),
    email: yup.string()
                    .typeError("L'email est invalide")
                    .required("L'email est obligatoire"),
    desc:yup.string()
                    .typeError("La description est invalide"),
    role_id:yup.string()
                    .typeError("Le role est invalide")
                    .required("Le role est obligatoire"),
});