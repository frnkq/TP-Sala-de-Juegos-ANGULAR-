export class User {

    private _name:string;
    private _email:string;
    private _username:string;
    private _password:string;

    get name() :string
    {
        return this._name;
    }

    get email() :string
    {
        return this._email;
    }

    get username(): string
    {
        return this._username;
    }

    get password(): string
    {
        return this._password;
    }

    constructor(name:string, email:string, username:string, password:string)
    {
        this._name = name;
        this._email = email;
        this._username = username;
        this._password = password;
    }

    public Register()
    {
        
    }
}