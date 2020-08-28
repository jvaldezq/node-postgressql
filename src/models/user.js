export class User {
  username

  constructor(user) {
    this.username = user?.username || null;
  }
}
