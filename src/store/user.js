import { action, observable } from "mobx";
import loginService from '../services/login';

class UserStore {
  constructor() {
    this.user = observable({});
    // wrap state mutations in actions decorator
    this.login = action(this.login.bind(this));
  }

  login(credentials) {
    loginService.login(credentials)
  }

}

export default new UserStore();
