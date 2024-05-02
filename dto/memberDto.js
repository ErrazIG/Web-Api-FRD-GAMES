export class MemberDTO {
    constructor({username, email, description, role_id}) {
      this.username = username;
      this.email = email;
      this.description = description;
      this.role_id = role_id;
    }
  }