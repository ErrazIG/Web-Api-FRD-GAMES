"use strict";

export class registerMemberDTO {
    constructor(username, email, password, confirmEmail, confirmPassword,) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmEmail = confirmEmail;
        this.confirmPassword = confirmPassword;
    }
}