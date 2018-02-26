import { action, observable } from "mobx";
import loginService from "../services/login";

class UserStore {
  constructor() {
    this.user = observable({});
    // wrap state mutations in actions decorator
    this.login = action(this.login.bind(this));
    this.logout = action(this.logout.bind(this));
  }

  async login(credentials, onSuccess) {
    const creds = await loginService.login(credentials);
    this.user = creds;
    onSuccess();
  }

  logout(onSuccess) {
    this.user = {};
    onSuccess();
  }
}

export default new UserStore();
