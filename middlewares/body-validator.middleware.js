"use strict";

import { ObjectSchema } from "yup";

/**
 * Body Validator middleware
 * @param { ObjectSchema } yupValidator
 * @param { number } errorCode
 */
export const bodyValidatorMiddleware = (yupValidator, errorcode = 422) => {
  /**
   * Middleware
   * @param {request} req
   * @param {result} res
   * @param {nextFunction} next
   */
  return async (req, res, next) => {

    console.log(Object.keys(req.body).length === 0);

    if (Object.keys(req.body).length === 0) {
      res.status(400).json({
        errorMessage: "No data !",
      });
      return;
    }
    try {
        console.log("test first log tr 1");
        const validateData = await yupValidator
        .noUnknown()
        .validate(req.body, { abortEarly: false });
        console.log("test first log tr 2");
        
      req.validateData = validateData;

      next();
    } catch (yupErr) {
        console.log(yupErr.inner);
      // console.log("yupErr : ", yupErr);
      const requestErrors = {};
      for (const { path, errors } of yupErr.inner) {
        console.log(path, errors);
        requestErrors[path] = errors.join(", ");
      }
      res.status(errorcode).json({
        errorMessage: "Invalid request body",
        errors: requestErrors,
      });
    }
  };
};
