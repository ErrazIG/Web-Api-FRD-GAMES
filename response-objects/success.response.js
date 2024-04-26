"use strict";
export class SuccessObjectResponse {

    constructor(result, statusCode = 200) {
        this.result = result;
        this.statusCode = statusCode;
    }
}