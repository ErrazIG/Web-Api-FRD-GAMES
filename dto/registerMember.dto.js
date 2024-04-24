"use strict";

export class registerMemberDTO {
    //TODO faut il enlever dans les arguments confirm email et confirm password ?
    constructor(username, email, password, confirmEmail, confirmPassword,) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmEmail = email;
        this.confirmPassword = password;
    }
}