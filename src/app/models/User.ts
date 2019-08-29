export class User {

    private _name:string;
    private _surname:string;
    private _username:string;
    private _password:string;

    get name() :string
    {
        return this._name;
    }

    get surname() :string
    {
        return this._surname;
    }

    get username(): string
    {
        return this._username;
    }

    get password(): string
    {
        return this._password;
    }

    constructor(name:string, surname:string, username:string, password:string)
    {
        this._name = name;
        this._surname = surname;
        this._username = username;
        this._password = password;
    }

    public Register()
    {
        
    }
}