import { action, observable } from "mobx";
import loginService from '../services/login';

class UserStore {
  constructor() {
    this.user = observable({});
    // wrap state mutations in actions decorator
    this.login = action(this.login.bind(this));
  }

  async login(credentials) {
    const creds = await loginService.login(credentials);
    this.user = creds;
  }

}

export default new UserStore();
