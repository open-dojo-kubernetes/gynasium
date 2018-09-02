import { Guid } from './guid';

export class LoginAttempt {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public result: boolean;

  constructor(name: string, email: string, password: string) {
    this.id = Guid.newGuid();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
