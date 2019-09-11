export class User {
    get username() {
        return this._username;
    }
    get password() {
        return this._password;
    }
    constructor(username, password) {
        this._username = username;
        this._password = password;
    }
    static LogIn(username, password) {
        let foundUser = true;
        if (foundUser) {
            console.info("Logged in as : " + password);
            return new User(username, password); //change to retrieve whats in  db
        }
        else
            return null;
    }
}
//# sourceMappingURL=User.js.map