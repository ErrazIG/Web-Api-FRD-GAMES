export class MemberDTO {
    constructor({username, email, desc, role_id}) {
      this.username = username;
      this.email = email;
      this.desc = desc;
      this.role_id = role_id;
    }
  }